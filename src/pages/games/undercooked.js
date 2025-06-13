import Head from 'next/head'
import Link from 'next/link'

export default function UnderCooked() {
  return (
    <>
      <Head>
        <title>UnderCooked | FadiliTechnology</title>
      </Head>

      <div style={{ padding: '2rem' }}>
        <h1>UnderCooked</h1>
        <p>This is a placeholder page for the UnderCooked game.</p>

        <Link href="/categories/games">
          <a style={{ color: '#0070f3' }}>← Back to Games</a>
        </Link>
      </div>
    </>
  )
}
