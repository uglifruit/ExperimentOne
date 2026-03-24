'use client'

import { useActionState, useState } from 'react'
import { login, signup } from '@/app/actions/auth'

export default function LoginPage() {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [loginState, loginAction, loginPending] = useActionState(login, undefined)
  const [signupState, signupAction, signupPending] = useActionState(signup, undefined)

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        className="geo-card"
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '2rem',
          borderColor: '#FF00FF',
          boxShadow: '0 0 32px #FF00FF, 0 0 64px rgba(255,0,255,0.3)',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '3rem' }} className="bounce">🔐</span>
          <h1
            className="rainbow"
            style={{ fontSize: '1.6rem', fontWeight: 'bold', margin: '0.5rem 0' }}
          >
            VIP TEACHER PORTAL
          </h1>
          <p style={{ color: '#AAAAAA', fontSize: '0.85rem' }}>
            TOP SECRET — AUTHORIZED EDUCATORS ONLY
          </p>
          <hr className="geo-hr" style={{ margin: '1rem 0' }} />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', marginBottom: '1.5rem', gap: '0' }}>
          <button
            onClick={() => setTab('login')}
            style={{
              flex: 1,
              padding: '10px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              cursor: 'pointer',
              border: '2px solid #FF00FF',
              borderRight: tab === 'login' ? '2px solid #FF00FF' : '1px solid #FF00FF',
              background: tab === 'login'
                ? 'linear-gradient(180deg, #FF00FF, #9900CC)'
                : 'transparent',
              color: tab === 'login' ? '#FFFF00' : '#FF00FF',
              fontFamily: 'inherit',
            }}
          >
            🔑 LOGIN
          </button>
          <button
            onClick={() => setTab('register')}
            style={{
              flex: 1,
              padding: '10px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              cursor: 'pointer',
              border: '2px solid #FF00FF',
              borderLeft: tab === 'register' ? '2px solid #FF00FF' : '1px solid #FF00FF',
              background: tab === 'register'
                ? 'linear-gradient(180deg, #FF00FF, #9900CC)'
                : 'transparent',
              color: tab === 'register' ? '#FFFF00' : '#FF00FF',
              fontFamily: 'inherit',
            }}
          >
            ✍️ REGISTER
          </button>
        </div>

        {/* Login Form */}
        {tab === 'login' && (
          <form action={loginAction} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {loginState?.error && (
              <div
                style={{
                  background: 'rgba(255,0,0,0.15)',
                  border: '2px solid #FF0000',
                  padding: '0.75rem',
                  color: '#FF6666',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                }}
              >
                ⚠️ {loginState.error}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#FFFF00', fontWeight: 'bold', fontSize: '0.85rem' }}>
                📧 EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="teacher@school.edu"
                style={{
                  background: '#000033',
                  border: '2px solid #9900CC',
                  color: '#FFFFFF',
                  padding: '10px 12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#FFFF00', fontWeight: 'bold', fontSize: '0.85rem' }}>
                🔒 PASSWORD
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                style={{
                  background: '#000033',
                  border: '2px solid #9900CC',
                  color: '#FFFFFF',
                  padding: '10px 12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loginPending}
              className="geo-button"
              style={{ width: '100%', opacity: loginPending ? 0.7 : 1 }}
            >
              {loginPending ? '⏳ LOGGING IN...' : '🚀 ENTER THE VIP ZONE'}
            </button>
            <p style={{ textAlign: 'center', color: '#AAAAAA', fontSize: '0.8rem' }}>
              No account?{' '}
              <button
                type="button"
                onClick={() => setTab('register')}
                style={{ background: 'none', border: 'none', color: '#FF00FF', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                Register here!
              </button>
            </p>
          </form>
        )}

        {/* Register Form */}
        {tab === 'register' && (
          <form action={signupAction} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {signupState?.error && (
              <div
                style={{
                  background: 'rgba(255,0,0,0.15)',
                  border: '2px solid #FF0000',
                  padding: '0.75rem',
                  color: '#FF6666',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                }}
              >
                ⚠️ {signupState.error}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#FFFF00', fontWeight: 'bold', fontSize: '0.85rem' }}>
                📧 EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="teacher@school.edu"
                style={{
                  background: '#000033',
                  border: '2px solid #9900CC',
                  color: '#FFFFFF',
                  padding: '10px 12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#FFFF00', fontWeight: 'bold', fontSize: '0.85rem' }}>
                🔒 PASSWORD
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="min. 8 characters"
                style={{
                  background: '#000033',
                  border: '2px solid #9900CC',
                  color: '#FFFFFF',
                  padding: '10px 12px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={signupPending}
              className="geo-button"
              style={{ width: '100%', opacity: signupPending ? 0.7 : 1 }}
            >
              {signupPending ? '⏳ CREATING ACCOUNT...' : '✨ JOIN THE VIP CLUB'}
            </button>
            <p style={{ textAlign: 'center', color: '#AAAAAA', fontSize: '0.8rem' }}>
              Already a member?{' '}
              <button
                type="button"
                onClick={() => setTab('login')}
                style={{ background: 'none', border: 'none', color: '#FF00FF', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                Login here!
              </button>
            </p>
          </form>
        )}

        <hr className="geo-hr" style={{ margin: '1.5rem 0 1rem' }} />
        <p style={{ textAlign: 'center', color: '#555', fontSize: '0.7rem' }}>
          🔐 SECURED WITH 128-BIT ENCRYPTION™ (PROBABLY) 🔐
        </p>
      </div>
    </main>
  )
}
