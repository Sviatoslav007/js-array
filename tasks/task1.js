function filterAdults(people) {
  // Використовую метод .filter, щоб перевірити кожного "person"
  const adults = people.filter(person => person.age >= 18);
  
  // Повертаю новий відфільтрований масив
  return adults;
}

module.exports = filterAdults;