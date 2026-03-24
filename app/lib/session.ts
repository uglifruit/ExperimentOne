import 'server-only'
import { createClient } from '@/app/lib/supabase-server'

export async function getSession() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user ? { userId: user.id, email: user.email } : null
}
