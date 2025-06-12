import Head from 'next/head'
import Link from 'next/link'

export default function AiModels() {
  return (
    <>
      <Head>
        <title>AI Models | FadiliTechnology</title>
      </Head>

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AI Models</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Coming soon...</p>

        <Link href="/" style={{ color: '#0070f3', display: 'inline-block', marginTop: '2rem' }}>
          ← Back to Home
        </Link>
      </div>
    </>
  )
}
