// youKnow() 함수를 작성해 주세요
function youKnow(name, cb) {
  console.log("You know ~");
  cb(name);
}

function sayMyName(name) {
  console.log(`엄.... 제 이름은 ${name} 입니다`);
}

youKnow("이효석", sayMyName);
youKnow("이효석", function (name) {
  console.log(`저는 ${name} 이고, 취미는 자전거를 탑니다`);
});
