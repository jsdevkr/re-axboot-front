import { NextPage } from "next";
import App, { AppProps } from "next/app";
import React, { useState, useReducer } from "react";
import { ThemeProvider } from "emotion-theming";
import { useImmerReducer } from "use-immer";
import "styles/app.ts";
import { lightColors } from "styles/colors";
import axios from "axios";
import {
  initialConfig,
  ConfigContext,
  DispatchConfigContext,
  DispatchThemeContext
} from "store/initialConfig";
import { configReducer } from "store/configReducer";
import { themeReducer } from "store/themeReducer";

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
  const [theme, dispatchTheme] = useImmerReducer(themeReducer, {
    colors: lightColors
  });
  const { Component, pageProps } = props;
  return (
    <DispatchConfigContext.Provider value={dispatchConfig}>
      <ConfigContext.Provider value={config}>
        <DispatchThemeContext.Provider value={dispatchTheme}>
          <ThemeProvider theme={theme.colors}>
            <Component {...pageProps} />
          </ThemeProvider>
        </DispatchThemeContext.Provider>
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
