import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider, theme } from 'styled';
import { GlobalStyles } from 'styles/app';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const isServer = typeof window === 'undefined';

    return {
      isServer,
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <GlobalStyles />
      </Container>
    );
  }
}
