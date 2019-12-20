import { NextPage } from "next";
import App, { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import { useImmerReducer } from "use-immer";
import "styles/app.ts";
import theme from "../styles/theme";
import axios from "axios";
import {
  initialConfig,
  ConfigContext,
  DispatchConfigContext
} from "../store/initialConfig";
import { configReducer } from "../store/configReducer";

interface IProps {
  hasErrored?: boolean;
  isLoading?: boolean;
  isServer?: boolean;
  errorMessage?: string;
}

const MyApp: NextPage<AppProps, IProps> = props => {
  const [config, dispatchConfig] = useImmerReducer(
    configReducer,
    initialConfig
  );
  const { Component, pageProps } = props;
  return (
    <DispatchConfigContext.Provider value={dispatchConfig}>
      <ConfigContext.Provider value={config}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConfigContext.Provider>
    </DispatchConfigContext.Provider>
  );
};

MyApp.getInitialProps = async ({ req }) => {
  // const isServer = !!req;
  return axios
    .get("http://www.querypie.com")
    .then(res => {
      return {};
    })
    .catch(res => {
      return {};
    });
};

export default MyApp;
