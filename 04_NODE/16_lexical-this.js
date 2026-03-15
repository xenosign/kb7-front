const calculator = {
  name: 'MyCalculator',
  numbers: [1, 2, 3],

  printNumbersRegular() {
    this.numbers.forEach(function (n) {
      // window or global
      console.log(this.name + ': ' + n);
    });
  },

  printNumbersArrow() {
    this.numbers.forEach((n) => {
      // 화살표 함수는 자신만의 this X, 상위인 스코프의 this(calculator) 사용
      console.log(this.name + ': ' + n);
    });
  },
};

calculator.printNumbersArrow();
calculator.printNumbersRegular();
