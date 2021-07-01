import Head from 'next/head'

import 'styles/globals.css'
import 'styles/css/bootstrap.min.css'
import 'styles/css/fontawesome.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Casio Authorized Online Store - Buy Casio Watches, Clocks,
          Calculators, Musical Keyboards, Pianos, Headphone and more Online at
          CasioIndiaShop.com
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
