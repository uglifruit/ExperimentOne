'use server'
import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '@/app/lib/session'
import { findUserByEmail, createUser, verifyPassword } from '@/app/lib/users'

export async function signup(prevState: { error?: string } | undefined, formData: FormData) {
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string

  if (!email || !password) return { error: 'Email and password are required.' }
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' }

  const existing = await findUserByEmail(email)
  if (existing) return { error: 'An account with this email already exists.' }

  const user = await createUser(email, password)
  await createSession(user.id, user.email)
  redirect('/vip')
}

export async function login(prevState: { error?: string } | undefined, formData: FormData) {
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string

  if (!email || !password) return { error: 'Email and password are required.' }

  const user = await findUserByEmail(email)
  if (!user) return { error: 'Invalid email or password.' }

  const valid = await verifyPassword(password, user.passwordHash)
  if (!valid) return { error: 'Invalid email or password.' }

  await createSession(user.id, user.email)
  redirect('/vip')
}

export async function logout() {
  await deleteSession()
  redirect('/')
}
