import Head from 'next/head'
import Link from 'next/link'

const games = [
  {
    title: 'UnderCooked',
    image: '/undercooked.jpg',
    link: '/games/undercooked'
  }
]

export default function Games() {
  return (
    <>
      <Head>
        <title>Games | FadiliTechnology</title>
      </Head>

      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Games</h1>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {games.map((game, index) => (
            <Link href={game.link} key={index}>
              <a style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${game.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <h2
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px'
                    }}
                  >
                    {game.title}
                  </h2>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <Link href="/">
          <a style={{ color: '#0070f3', display: 'inline-block', marginTop: '2rem' }}>
            ← Back to Home
          </a>
        </Link>
      </div>
    </>
  )
}
