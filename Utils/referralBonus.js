const User = require("../Models/usersModel");
const Referral = require("../Models/referralModel");
const generateReceipt = require("../Controllers/generateReceipt");
const { randomUUID } = require("crypto");
const referralBonus = async ({ sponsorUserName, userName, bonusAmount }) => {
  try {
    const sponsor = await User.findOne({ userName: sponsorUserName });
    console.log(sponsor.role);
    console.log({ sponsorUserName, userName, bonusAmount });
    if (!sponsor) return;
    if (sponsor.role !== "ambassador") return;
    // increasing sponsor balance
    await User.updateOne(
      {
        _id: sponsor._id,
      },
      {
        $inc: { earningBalance: bonusAmount },
      }
    );
    // increasing the total amount earned on the user
    await Referral.updateOne(
      { referredBy: sponsor.userName, userName },
      { $inc: { amountEarned: bonusAmount } }
    );
    // create the transaction for the sponsor
    await generateReceipt({
      transactionId: randomUUID(),
      planNetwork: `earning from ${userName}'s transaction`,
      planName: `₦ ${bonusAmount}`,
      phoneNumber: sponsor.userName,
      status: "success",
      amountToCharge: bonusAmount,
      balance: sponsor.balance,
      userId: sponsor._id,
      userName: sponsor.userName,
      type: "earning",
      increased: true,
      wavedAmount: -bonusAmount, //profit decreased
      // volumeRatio: volumeRatio,
    });
  } catch (error) {
    console.log(`Error in referralBonus : ${error}`);
    return;
  }
};
const reverseReferralBonus = async ({
  sponsorUserName,
  userName,
  bonusAmount,
}) => {
  try {
    // decreasing sponsor balance
    const sponsor = await User.findOne({ userName: sponsorUserName });
    if (!sponsor) return;
    if (sponsor.role !== "ambassador") return;
    await User.updateOne(
      {
        _id: sponsor._id,
      },
      {
        $inc: { earningBalance: -bonusAmount },
      }
    );
    // decreasing the total amount earned on the user
    await Referral.updateOne(
      { referredBy: sponsor.userName, userName },
      { $inc: { amountEarned: -bonusAmount } }
    );
    // create the transaction for the sponsor
    await generateReceipt({
      transactionId: randomUUID(),
      planNetwork: `chargeback for refunded transaction for ${userName}`,
      planName: `₦ ${-bonusAmount}`,
      phoneNumber: sponsor.userName,
      status: "success",
      amountToCharge: bonusAmount,
      balance: sponsor.balance,
      userId: sponsor._id,
      userName: sponsor.userName,
      type: "earning",
      wavedAmount: bonusAmount, //profit decreased
      // volumeRatio: volumeRatio,
    });
  } catch (error) {
    console.log(error);
  }
};
const addReferral = async ({ userName, sponsorId }) => {
  try {
    await Referral.create({ userName, referredBy: sponsorId });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { referralBonus, reverseReferralBonus, addReferral };
