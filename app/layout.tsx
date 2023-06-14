import '../src/styles/globals.css'

import Head from '../src/components/app/head'
import Header from '../src/components/app/header'
import Footer from '../src/components/app/footer'

import { Navigation } from '../src/components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        <hr />
        <Navigation />
        <hr />
        {children}
        <hr />
        <Footer />
        </body>
    </html>
  )
}
