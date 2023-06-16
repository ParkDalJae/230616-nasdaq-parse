import { readFileSync,writeFileSync } from "fs";

const filePath = "./NASMST.json";
const savePath = "./NASMST2.json";
try {
  // const jsonData = readFileSync(filePath, 'utf-8')
  const jsonData = JSON.parse(readFileSync(filePath, "utf-8"));
  // console.log(jsonData[0][4], "+", jsonData[0][6]);
  const arrayTmp = jsonData.map(key => [key[4], key[6]]);
  // console.log(arrayTmp)
  writeFileSync(savePath, JSON.stringify(arrayTmp))

} catch (error) {
  console.error("파일을 읽을 수 없습니다:", error);
}
