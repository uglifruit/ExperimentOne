'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/app/lib/supabase-server'
import { createAdminClient } from '@/app/lib/supabase-admin'

export async function postGuestbookEntry(
  prevState: { error?: string; success?: boolean } | undefined,
  formData: FormData
) {
  const message = (formData.get('message') as string)?.trim()
  if (!message) return { error: 'Message cannot be empty.' }
  if (message.length > 500) return { error: 'Message must be 500 characters or less.' }

  // Verify auth with the user-scoped client
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'You must be logged in to post.' }

  // Write with the admin client (service role key) — reliable insert regardless of RLS
  const admin = createAdminClient()
  const { error } = await admin
    .from('guestbook')
    .insert({ user_id: user.id, user_email: user.email, message })

  if (error) return { error: 'Failed to post message. Please try again.' }

  revalidatePath('/guestbook')
  return { success: true }
}
