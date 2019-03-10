// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

class Student {

  constructor(name, marksForGrammer, marksForAccounts, marksForPhysics, subject) {
    this.name = name;
    this.marksForGrammer = marksForGrammer;
    this.marksForAccounts = marksForAccounts;
    this.marksForPhysics = marksForPhysics;
    this.subject = subject;

  }
}

// function to get random number between 0 and 100
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var studentArray = [];
// setting student data 
var students;
for (let index = 0; index < 50; index++) {
  studentArray.push({ name: "Student" + index, marksForGrammer: getRandomInt(0, 100), marksForAccounts: getRandomInt(0, 100), subject: "Grammer and Accounts" });

  for (let index = 51; index < 100; index++) {
    studentArray.push({ name: "Student" + index, marksForGrammer: getRandomInt(0, 100), marksForPhysics: getRandomInt(0, 100), subject: "Grammer and Physics" });
  }

}

console.log(studentArray);

// grouping students based on subject

let studentsSubjectWise = studentArray.reduce((accumulator, student) => {
  let key = student['subject'];
  //console.log('key',key);

  if (!accumulator[key]) {
    accumulator[key] = [];
    accumulator[key].push(student);
  }
  else {
    accumulator[key].push(student);
  }
  return accumulator;

}, {});

console.log('students branch wise', studentsSubjectWise);



//displaying results

studentArray.forEach(student => {
  // student.email = student.email + 'updated';
  console.log("Marks For Student having  Grammer and accounts");
  if (student.subject == "Grammer and Accounts") {
    marksForAccountsAndGrammer = (student.marksForGrammer + student.marksForAccounts) / 2 * 100;
    Console(student.name + "has got " + marksForAccountsAndGrammer + "Grammer and Account");
  } else {
    marksForAccountsAndPhysics = (student.marksForGrammer + student.marksForAccountsAndPhysics) / 2 * 100;
    Console(student.name + "has got " + marksForAccountsAndGrammer + "Grammer and Physics");
  }

})