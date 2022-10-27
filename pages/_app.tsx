import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/search.css'
import '../styles/items.css'
import '../styles/banner.css'
import '../styles/link.css'
import '../styles/about.css'
import '../styles/footer.css'

import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
