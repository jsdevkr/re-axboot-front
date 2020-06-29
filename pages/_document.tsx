import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head title="AXBOOT">
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
            name="viewport"
          />
          <title>AXBOOT</title>
          <link color="#BE9300" href="/public/favicon.png" rel="mask-icon" />
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
