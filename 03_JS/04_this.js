const sayHelloNormal = function () {
  console.log("name:", this.name);
  console.log("this:", this);
};

const sayHelloArrow = () => {
  console.log("name:", this.name);
  console.log("this:", this);
};

const tetz = {
  name: "Mike",
  sayHelloNormal,
  sayHelloArrow,
};

tetz.sayHelloNormal();
tetz.sayHelloArrow();
