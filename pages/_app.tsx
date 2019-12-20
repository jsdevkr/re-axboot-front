import { NextPage } from "next";
import App, { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import { useImmerReducer } from "use-immer";
import "styles/app.ts";
import theme from "styles/theme";
import axios from "axios";
import {
  initialConfig,
  ConfigContext,
  DispatchConfigContext
} from "store/initialConfig";
import { configReducer } from "store/configReducer";

interface IProps {
  hasErrored?: boolean;
  isLoading?: boolean;
  isServer?: boolean;
  errorMessage?: string;
}

const MyApp: NextPage<AppProps & IProps, IProps> = props => {
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

// API로부터 초기 설정값을 받아서 화면을 구성해야 하는 경우 사용.
MyApp.getInitialProps = async ({ req }) => {
  // const isServer = !!req;
  return axios
    .get("http://apiurl")
    .then(res => {
      return {};
    })
    .catch(res => {
      return {};
    });
};

export default MyApp;
