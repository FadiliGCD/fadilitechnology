
import Head from 'next/head'

const categories = [
  { name: 'AI Models', image: '/ai.jpg', link: '/categories/ai' },
  { name: 'Games', image: '/games.jpeg', link: '/categories/games' },
  { name: 'Apps', image: '/apps.jpeg', link: '/categories/apps' },
  { name: 'WebApps', image: '/webapps.jpeg', link: '/categories/webapps' },
  { name: 'Websites', image: '/websites.jpeg', link: '/categories/websites' },
  { name: 'Hardware', image: '/robots.jpeg', link: '/categories/robots' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>FadiliTechnology</title>
      </Head>

      <div className="hero">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          

        <h1>FadiliTechnology</h1>
      
      </div>

      <div className="categories">
        {categories.map((cat) => (
          <a href={cat.link} key={cat.name}>
            <div
              className="category"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <h2>{cat.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
