/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.indexOf(sandwiches[0]) !== -1) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      const first = students.shift();
      students.push(first);
    }
  }
  return students.length;
};

