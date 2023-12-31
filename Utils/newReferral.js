const User = require("../Models/usersModel");
const newReferral = async (payload) => {
  const { userName, email, referredBy } = payload;
  const newReferral = {
    userName: userName,
    email: email,
    totalEarned: 0,
  };
  const referrer = await User.findOne({ userName: referredBy });
  // Adding the new refferal to the user document
  if (!referrer) return;
  await User.updateOne(
    { _id: referrer._id },
    { $push: { referrals: newReferral } }
  );
};
module.exports = newReferral;
