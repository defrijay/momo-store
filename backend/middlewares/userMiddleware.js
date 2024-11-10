// Special middleware used to validate user profile data before saving it to the database.
const validateUserAddress = async function (next) {
    const user = this;
  
    // Validation to ensure only one address has isMain: true
    if (user.isModified('profile.address')) {
      const mainAddressCount = user.profile.address.filter(addr => addr.isMain === true).length;
      if (mainAddressCount > 1) {
        return next(new Error('Only one address can have isMain set to true.'));
      }
    }
  
    // Validate if the user is admin, make sure the address is empty
    if (user.isAdmin && user.profile.address && user.profile.address.length > 0) {
      return next(new Error('Admin user should not have an address.'));
    }
  
    next();
  };
  
  module.exports = validateUserAddress;
  