import _ from "lodash"; //lodash 는 _로우대쉬를 사용하라는것~!
//구조 분해 할당
//비구조화 할당
const user = {
  name: "jiyeon",
  age: 23,
  email: "pgy5638@naver.com",
};
const { name, age, email, address } = user;
//E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`);
console.log(`${name}의 나이는 ${age}`);
console.log(address);

const fruits = ["Apple", "Banana", "Cherry", "orange"];
const [a, b, c, d, e] = fruits;
console.log(a, b, c, d);

//전개 연산자
console.log(fruits);
console.log(...fruits);

function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}

console.log(toObject(...fruits));

//데이터 불변성
let k = { k1: 1 };
let j = { k1: 4 };
console.log(k, j, k === j);

k.k1 = 7;
j = k; //k메모리주소를 j가 바라보게되므로 true가 나옴
console.log(k, j, k === j);

k.k1 = 2; //j가 이미 k메모리를 바라보고있으므로 j의 k1값도 수정됨
console.log(k, j, k === j);

let i = j;
console.log(k, j, i, k === i);
k.k1 = 9;
console.log(k, j, i, k === i);

//얕은복사 ,깊은복사
const copyUser = _.cloneDeep(user);
console.log(copyUser === user); //false

user.age = 22;
console.log("user", user);
console.log("copyUser", copyUser);
