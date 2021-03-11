// //object.create
const a1 = {
  prop1: 'prop1',
  prop2: 'prop2',
  b: {},
  c: () => {},
};

const b1 = Object.create(a1);
// console.log(a1.__proto__);
// console.log(b1.__proto__);

// -----------------------------------------
function A2() {
  this.a = 10;
  this.b = 20;
  this.c = 30;
  this.f = () => {};
}

class B2 {
  constructor() {
    this.a = 11;
    this.b = 21;
    this.c = 31;
  }

  f() {
    console.log(this.a);
  }
}

// export const a = new A2();

module.exports.b = new B2();
