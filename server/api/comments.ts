import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async () => {
  const file = await readFile(join(process.cwd(), 'public/data/example.json'), 'utf-8')
  return JSON.parse(file)
})
