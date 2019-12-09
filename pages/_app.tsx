import App from "next/app";
import React from "react";
import "styles/app.ts";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
