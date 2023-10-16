import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Provider
import { ThemeProvider } from '@/Provider/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <title>Tanapat Eiam-arj</title>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
