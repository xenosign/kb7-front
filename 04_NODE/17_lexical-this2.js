function Timer() {
  this.seconds = 0;

  // this 는 setInterval 을 호출한 window or global
  setInterval(function add() {
    this.seconds++;
    console.log('Regular:', this.seconds);
  }, 1000);

  // 자신의 this 가 없으므로 Timer 인스턴스를 가르킴
  setInterval(() => {
    this.seconds++;
    console.log('Arrow:', this.seconds);
  }, 1000);
}

const timer = new Timer();
