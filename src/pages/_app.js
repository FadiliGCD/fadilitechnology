import '@/styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <Component {...pageProps} toggleDark={() => setDark(!dark)} isDark={dark} />
    </>
  )
}

export default MyApp
