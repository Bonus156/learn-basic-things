const car = {
  isRun() {
    console.log('run car');
  }
}

const ladaCar = {
  __proto__: car,
  name: 'lada',
}

car.isStop = function() {
  console.log('stop car');
}

ladaCar.isRun();
ladaCar.isStop();

console.log('ladacar', ladaCar);
console.log('car', car);

// ladaCar.prototype.isRet = function() {
//   console.log('fuck');
// }


console.log('ladacar2', ladaCar);
console.log('car2', car);

// car.isRet();

function F() {
  this.namer = 'funfuck';
}

// F.prototype = {};

console.log(F.prototype);

const ff = new F();

console.log('ff', ff);

ladaCar.__proto__ = F.prototype;

const sexCar = new ladaCar.constructor;
console.log('sc', sexCar);
console.log(ladaCar.prototype );

const oo = {
  j: 'jopa',
  add(a, b) {
    console.log(this.j);
    return a + b;
  }
}

setTimeout(oo.add.bind(oo), 1000);