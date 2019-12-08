import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head title="QueryPie :: A Fresh Design For Database IDE Get Ready!">
          <link rel="stylesheet" href="https://use.typekit.net/cne0qys.css" />

          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
            name="viewport"
          />

          <link color="#BE9300" href="/static/favicon.png" rel="mask-icon" />
          <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />

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
