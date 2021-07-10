import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CollapseProvider } from '../context/CollapseContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CollapseProvider>
      <Component {...pageProps} />
    </CollapseProvider>
  )
}
export default MyApp
