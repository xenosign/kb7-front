function callbackLog(cb) {
  console.log("==== callbackLog 함수 호출 ====");
  cb();
}
function sayMuyaho() {
  console.log("무야호~ ");
}
function sayMyName() {
  console.log("내 이름은? 이효석");
}
callbackLog(sayMuyaho);
callbackLog(sayMyName);
