function likes(names) {
  if (!names || names.length === 0) {
    return "no one likes this";
  }

  var length = names.length;

  for (var i = 0; i < names.length; i++) {
    if (length === 1) {
      return names[0] + " likes this";
    } else if (length === 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (length === 3) {
      return (
        names[0] + ", " + names[1] + " " + "and " + names[2] + " like this"
      );
    } else {
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (length - 2) +
        " others like this"
      );
    }
  }
}
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
