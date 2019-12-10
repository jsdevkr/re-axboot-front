import App from "next/app";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import "styles/app.ts";
import theme from "../styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
