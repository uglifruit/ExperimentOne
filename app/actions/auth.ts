'use server'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/supabase-server'

export async function signup(prevState: { error?: string } | undefined, formData: FormData) {
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string

  if (!email || !password) return { error: 'Email and password are required.' }
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({ email, password })

  if (error) return { error: error.message }

  redirect('/vip')
}

export async function login(prevState: { error?: string } | undefined, formData: FormData) {
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string

  if (!email || !password) return { error: 'Email and password are required.' }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: 'Invalid email or password.' }

  redirect('/vip')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}
