function orderCoffee(callback) {
  console.log("1. 주문을 받습니다...");

  setTimeout(function () {
    const coffeeName = "☕ 아메리카노";
    callback(coffeeName);
  }, 3000);
}

orderCoffee(function (result) {
  console.log("2. 주문한 커피: " + result);
});

console.log("3. 다른 손님의 주문을 받습니다.");
