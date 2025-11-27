const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  // Я спочатку відбираю студентів з високим балом, а потім перетворюю об'єкти на імена
  const topStudents = students
    .filter(student => student.score > 80)
    .map(student => student.name);
  
  return topStudents;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  // Я перевіряю, чи масив не пустий, щоб не ділити на нуль
  if (students.length === 0) {
    return 0;
  }

  // Я використовую цикл for, щоб підсумувати вік усіх студентів
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }

  // Я ділю загальну суму на кількість студентів
  return totalAge / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  // Я додаю нового студента в кінець існуючого масиву
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  // Я створюю новий масив, залишаючи тільки тих студентів, чиє ім'я НЕ збігається з переданим
  return students.filter(student => student.name !== name);
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };