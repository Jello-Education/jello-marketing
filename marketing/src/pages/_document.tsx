import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" href="/fonts/MontserratBold.ttf" as="font" />
          <link rel="preload" href="/fonts/MontserratNormal.ttf" as="font" />
          <link
            rel="shortcut icon"
            href="/static/favicon.png"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
