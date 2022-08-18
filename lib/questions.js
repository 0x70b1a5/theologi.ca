import fs from 'fs'
import path from 'path'

const summaPath = path.join(process.cwd(), 'summa.json')
const partsToExamine = [
  'FP',
  'FS',
  'SS',
  'TP'
]


export function getQuestionsData() {
  const summaRaw = fs.readFileSync(summaPath, 'utf8')
  const summa = JSON.parse(summaRaw)
  
}
