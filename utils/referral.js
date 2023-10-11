const User = require("../models/userModel");
const saveReferral = async ({ userName, email, referredBy }) => {
  const newReferral = {
    userName: userName,
    totalEarned: 0,
  };
  const referrer = await User.findOne({ userName: referredBy });
  // Adding the new referral to the user document
  if (!referrer) return;
  await User.updateOne(
    { _id: referrer._id },
    { $addToSet: { referrals: newReferral } }
  );
};
module.exports = saveReferral;
