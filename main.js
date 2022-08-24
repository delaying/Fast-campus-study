//콜백함수
function timeout(callback) {
  setTimeout(() => {
    console.log("hi");
    callback();
  }, 3000);
}

timeout(() => {
  console.log("done");
});

//생성자 함수
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const delay = new User("delay", "park");
const amy = new User("amy", "clas");

console.log(delay);
console.log(amy);
console.log(delay.getFullName());

//this

function NewUser(name) {
  this.name = name;
}

NewUser.prototype.normal = function () {
  console.log(this.name);
};
NewUser.prototype.arrow = () => {
  console.log(this.name);
};

const name = new NewUser("delay");

//ES6 Classes
const heropy = {
  name: "Heropy",
  normal() {
    console.log(this.name);
  },
};

heropy.normal();

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class UserClass {
  //constructor: function(first,last)와 같음
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  //자동으로 prototype 메소드 만들수있음
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//상속(확장)
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    //super는 Vehicle이 실행됨!
    super(name, wheel);
  }
}
const myBicycle = new Bicycle("삼천리", 2);
const daughterBicycle = new Bicycle("세발", 3);
console.log(myBicycle);
console.log(daughterBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car("벤츠", 4, true);
const daughtersCar = new Car("포르쉐", 4, false);

console.log(myCar);
console.log(daughtersCar);

//.filter()
const numbers = [1, 2, 3, 4];
const fruits = ["apple", "banana", "cherry"];

const filt = numbers.filter((number) => number < 3);
console.log(filt);

//.find() .findIndex()
const fin = fruits.find((fruit) => /^b/.test(fruit));
console.log(fin);

//.includes()
const incl = numbers.includes(3);
console.log(incl);

//.push()  .unshift()
//원본 수정됨!
numbers.push(5);
console.log(numbers);

//splice()
numbers.splice(2, 1, 99);
console.log(numbers);

//Object.assing()
const userAge = {
  //key:value
  name: "jiyeon",
  age: 23,
};
const userEmail = {
  name: "jiyeon",
  email: "pgy5638@naver.com",
};

const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

//응용
console.log(userAge["age"]);

const keys = Object.keys(userAge);

const values = keys.map((key) => userAge[key]);
console.log(values);
