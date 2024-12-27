// Javascript Engine to generate credentials

// Method to generate a string. Can be called multiple times for multiple strings
function generateString() {
  // Return a substring
  // // Generated via the Math.random()'s output,
  // // converted into a string with Base36 (9 digits + 27 English characters),
  // // getting the substring excluding the first 2 indexes ('0.')
  return Math.random().toString(36).substring(2);
}

// Constant variable/object-method
const credential = {
  // Generates random username
  username(extraLength = 1) {
    let usernameToReturn = "";
    // Anti-fuzzing/breaking to set extraLength parameter
    if (extraLength < 1) {
      extraLength = 1;
    }
    // Increase length of usernameToReturn as requested by user
    // // Attempt this in try/catch
    try {
      for (let i = 0; i < extraLength; i++) {
        usernameToReturn += generateString();
      }
    } catch (error) {
      // If fails, return "FAILED"
      return "FAILED"
    } 
    return usernameToReturn;
  },

  // Generates random email address
  email(extraLength = 1) {
    let emailToReturn = "";
    // Anti-fuzzing/breaking to set extraLength parameter
    if (extraLength < 1) {
      extraLength = 1;
    }
    emailToReturn += credential.username(extraLength);
    emailToReturn += "@";
    emailToReturn += credential.username(extraLength);
    emailToReturn += ".";
    emailToReturn += credential.username(extraLength);
    
    return emailToReturn;
  }
}