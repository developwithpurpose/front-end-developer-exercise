//Create Utility class to be called.
//It is designed with function declared within such as this to allow the concept of private methods.
function Utils() {
  //As according to the ReadMe it seems friends should be alphabetized by last name.
  //This will take in the array of friends and return an array of sorted friends.
  //This method will be using merge sort
  function alphabetizeFriends(friendsArray) {
    if (friendsArray.length === 1) {
      return friendsArray;
    }
    var left = [], right = [];
    var middle = Math.floor(friendsArray.length / 2);
    var i;
    for (i = 0; i < middle; i++) {
      left.push(friendsArray[i]);
    }
    for (i = middle; i < friendsArray.length; i++) {
      right.push(friendsArray[i]);
    }
    left = alphabetizeFriends(left);
    right = alphabetizeFriends(right);
    return alphabeticalMerge(left, right);
  }
  //The actual merge, this should not be called directly from outside of alphabetizeFriends
  function alphabeticalMerge(left, right) {
    var returnValue = [];
    var leftIterator = 0;
    var rightIterator = 0;
    while (leftIterator < left.length && rightIterator < right.length) {
      if (left[leftIterator].lastName[0] <= right[rightIterator].lastName[0]) {
        returnValue.push(left[leftIterator]);
        leftIterator++;
      } else {
        returnValue.push(right[rightIterator]);
        rightIterator++;
      }
    }
    if (leftIterator < left.length) {
      while (leftIterator < left.length) {
        returnValue.push(left[leftIterator]);
        leftIterator++;
      }
    } else if (rightIterator < right.length) {
      while(rightIterator < right.length) {
        returnValue.push(right[rightIterator]);
        rightIterator++;
      }
    }
    return returnValue;
  }
  return {
    alphabetizeFriends:alphabetizeFriends
  };
}
window.Utils = new Utils();
