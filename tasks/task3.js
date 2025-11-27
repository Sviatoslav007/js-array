// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  // Я використовую вбудований метод .find(), щоб знайти перший об'єкт, де ім'я збігається з переданим
  const foundPerson = people.find(person => person.name === name);
  
  // Я повертаю знайдений об'єкт (або undefined, якщо такої людини в списку немає)
  return foundPerson;
}

module.exports = findByName;