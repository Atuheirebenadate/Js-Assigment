
//   Introduction to Factory functions in Javascript
let person = {
    firstName: 'Atuheire',
    lastName: 'Benadate',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  console.log(person.getFullName());
//   A Factory is a function that returns new object.
// The person2 object has two properties: firstName and lastName,
//  and one method getFullName() that returns the full name.
// How to use the "createperson" Fuction
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('Aine', 'Doe');
let person2 = createPerson('Amutuheire', 'Liz');

console.log(person1.getFullName());
console.log(person2.getFullName());