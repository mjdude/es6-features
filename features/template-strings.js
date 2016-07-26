// function greet( name = 'Andrew'){
//   console.log('Hello ' + name + '!');
//   console.log(`Hello ${name}!`);
// }
//
// greet();
// greet('Kate');
//
// console.log(`1 + 6 = ${ 1 + 6 }`);
// console.log(`Hey
//
//   This kind of looks like an email!
//
//   -Mo`);

var defaultPerson = {
  name: 'Mo',
  age: 30,
};

function greeting ( person = defaultPerson ){
    console.log(`Hi ${person.name}. You are ${person.age}`);
}

greeting();
