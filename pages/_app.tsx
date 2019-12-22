import React, { useState, useReducer } from "react";
import { NextPage } from "next";
import App, { AppProps } from "next/app";
import axios from "axios";
import { useImmerReducer } from "use-immer";
import { lightColors } from "styles/colors";
import "styles/app.ts";
import {
  ConfigContext,
  DispatchConfigContext,
  DispatchThemeContext
} from "store/initialConfig";
import { configReducer } from "store/configReducer";
import { themeReducer } from "store/themeReducer";
import { ThemeProvider } from "components/styled";
import defaultConfig from "store/defaultConfig";

interface IProps {
  pageName: string;
}
const MyApp: NextPage<AppProps & IProps, IProps> = props => {
  const [config, dispatchConfig] = useImmerReducer(
    configReducer,
    defaultConfig
  );
  const [theme, dispatchTheme] = useImmerReducer(themeReducer, {
    colors: lightColors
  });
  const { Component, pageProps, pageName } = props;

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
      return {
        pageName: ""
      };
    })
    .catch(res => {
      return {
        pageName: ""
      };
    });
};

export default MyApp;
