import { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.svg" />

        <style
          id="stiches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
