const classes = [
  { id: 1, name: '강채연' },
  { id: 2, name: '강태규' },
  { id: 3, name: '권유현' },
  { id: 4, name: '김건우' },
  { id: 5, name: '김기선' },
  { id: 6, name: '김민철' },
  { id: 7, name: '김수현' },
  { id: 8, name: '김현태' },
  { id: 9, name: '송준수' },
  { id: 10, name: '송태권' },
  { id: 11, name: '양승환' },
  { id: 12, name: '오진호' },
  { id: 13, name: '이대주' },
  { id: 14, name: '이민호' },
  { id: 15, name: '이아영' },
  { id: 16, name: '이지민' },
  { id: 17, name: '이지은' },
  { id: 18, name: '이채연' },
  { id: 19, name: '장지연' },
  { id: 20, name: '최규진' },
  { id: 21, name: '최보윤' },
  { id: 22, name: '홍상우' },
  { id: 23, name: '황지원' },
];

// 1. filter : 조건에 맞는 배열을 만들 때, 원본 배열 변화 없음
const who = classes.filter(function (student, index) {
  console.log(student, index);
  return student.id % 2 === 1;
});

console.log(who);

const kimFamily = classes.filter((student) => student.name.startsWith('김'));

console.log(kimFamily);

// 2. map : 각각의 배열 값에 특정 작업을 수행할 때 or 데이터 타입을 변환하여 리턴하는 함수, 원본 배열 변화 없음
const addConditionClasses = classes.map(function (student, index) {
  return { ...student, condition: 'good' };
});

console.log(addConditionClasses);

const nameList = classes.map((student) => student.name);

console.log(nameList);

// 3. forEach : 각각의 배열을 순회하면서 작업을 하고 싶을 때, 원본 배열 변화 및 리턴 값 없음
const addConditionByForEach = classes.forEach((student) => {
  console.log('forEach', student);
  return { ...student, condition: 'good' };
});

console.log('🚀 ~ addConditionByForEach:', addConditionByForEach);

// 4. find : 특정 요소 하나만 찾기
const KKS = classes.find(function (student) {
  return student.name === '김기선';
});

console.log(KKS);

const who2 = classes.find((student) => student.id === 10);

console.log(who2);

// 5. findIndex : 특정 요소 하나만 찾아서 index 를 반환
const KksId = classes.findIndex(function (student) {
  return student.name === '김기선';
});

console.log(KksId);

// 6. reduce : acc 라는 누산기 개념을 통해 복잡한 작업 수행. 반복되는 작업의 결과를 누적하고 해당 결과를 확인 가능
const howManyStudentIncludeTae = classes.reduce(function (acc, student) {
  if (student.name.includes('태')) {
    acc += 1;
  }

  return acc;
}, 0);

console.log(howManyStudentIncludeTae);

const statsByFamilyName = classes.reduce((acc, student) => {
  const familyName = student.name[0];
  acc[familyName] = (acc[familyName] || 0) + 1;
  return acc;
}, {});

console.log(statsByFamilyName);

// 7. sort : 정렬 함수, 원본에 변화 있음!
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100),
);

console.log('정렬 전:', randomNumbers);

// 오름차순 정렬
randomNumbers.sort((a, b) => a - b);

console.log('오름차순 정렬 후:', randomNumbers);

// 내림차순 정렬
randomNumbers.sort((a, b) => b - a);

console.log('내림차순 정렬 후:', randomNumbers);

// 반 사람들 내림차순 정렬
classes.sort((a, b) => b.id - a.id);
console.log(classes);
