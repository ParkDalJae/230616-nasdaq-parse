import { createReadStream, writeFileSync } from 'fs';
import { createInterface } from 'readline';

// .cod 파일 경로
const filePath = './NASMST.txt';
// JSON으로 변환된 데이터를 저장할 파일 경로
const jsonFilePath = './NASMST.json';

// .cod 파일 읽기 스트림 생성
const fileStream = createReadStream(filePath,{encoding: 'utf-8'});

// readline 인터페이스 생성
const rl = createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

// JSON 데이터 배열
let jsonData = [];

// 라인별로 읽기
rl.on('line', (line) => {
  // .cod 파일의 각 라인을 원하는 형식으로 파싱하여 JSON 데이터에 추가
  const parsedData = parseLine(line);
  jsonData.push(parsedData);
});

// .cod 파일 읽기 완료 후
rl.on('close', () => {
  // JSON 데이터를 파일로 저장
  writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  console.log('JSON 파일로 변환 완료');
});

// .cod 파일의 각 라인을 원하는 형식으로 파싱하는 함수
function parseLine(line) {
  // 파싱 로직 작성
  // 각 라인을 적절히 분석하여 원하는 형식으로 변환하여 반환
  // 예시: 공백으로 구분된 데이터를 콤마(,)로 구분된 배열로 변환
  const parsedData = line.split('\t');
  return parsedData;
}
