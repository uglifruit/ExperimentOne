import 'server-only'
import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'

const DATA_FILE = path.join(process.cwd(), 'data', 'users.json')

interface User {
  id: string
  email: string
  passwordHash: string
}

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]')
}

function readUsers(): User[] {
  ensureDataFile()
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
}

function writeUsers(users: User[]) {
  ensureDataFile()
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2))
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = readUsers()
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null
}

export async function createUser(email: string, password: string): Promise<User> {
  const users = readUsers()
  const passwordHash = await bcrypt.hash(password, 10)
  const user: User = { id: randomUUID(), email, passwordHash }
  users.push(user)
  writeUsers(users)
  return user
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}
