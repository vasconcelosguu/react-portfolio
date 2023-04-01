import '@/styles/globals.css'
import { MyContextProvider } from '@/Context/context'

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  )
}
