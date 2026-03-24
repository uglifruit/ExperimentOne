-- Run this in the Supabase SQL Editor for the MagicTeacherBase project
-- Dashboard: https://app.supabase.com → MagicTeacherBase → SQL Editor

-- Guestbook table
create table public.guestbook (
  id          uuid        default gen_random_uuid() primary key,
  user_id     uuid        references auth.users(id) on delete cascade not null,
  user_email  text        not null,
  message     text        not null,
  created_at  timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.guestbook enable row level security;

-- Anyone (including anonymous visitors) can read entries
create policy "Anyone can read guestbook entries"
  on public.guestbook for select
  using (true);

-- Only authenticated users can insert their own entries
create policy "Authenticated users can insert their own entries"
  on public.guestbook for insert
  to authenticated
  with check (auth.uid() = user_id);
