async function delayedTask(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`작업 ${num} 완료`);
      resolve(num * 10);
    }, 1000);
  });
}

async function runWithoutAwait() {
  console.log('--- await 미사용 시작 ---');
  const results = [];

  for (let i = 1; i <= 3; i++) {
    const result = delayedTask(i);
    results.push(result);
  }

  console.log('최종 결과:', results);
}

runWithoutAwait();
