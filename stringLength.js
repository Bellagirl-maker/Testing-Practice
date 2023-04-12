
function stringLength(string) { 
    if (string.length === 0) {
      throw new Error('String must not be empty');
    } else if (string.length > 10) {
      throw new Error ('String must not be more than 10 characters');
    } else {
      return string.length;
    }
  }
  


module.exports = stringLength