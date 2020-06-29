import React, { useState, useReducer, useEffect } from "react";
import { NextPage } from "next";
import App, { AppProps } from "next/app";
import axios from "axios";
import { useImmerReducer } from "use-immer";
import { defaultColors } from "styles/colors";
import {
  ConfigContext,
  DispatchConfigContext,
  DispatchThemeContext,
} from "store/initialConfig";
import { configReducer } from "store/configReducer";
import { themeReducer } from "store/themeReducer";
import { ThemeProvider } from "styled-components";
import defaultConfig from "store/defaultConfig";
import { IMenuItem } from "common/@interface";
import { Icon } from "antd";

import * as appDark from "styles/less/app-dark.less";
import * as appLight from "styles/less/app-light.less";

interface IProps {}
const MyApp: NextPage<AppProps & IProps, IProps> = (props) => {
  const { Component, pageProps } = props;
  const [config, dispatchConfig] = useImmerReducer(
    configReducer,
    defaultConfig
  );
  const [theme, dispatchTheme] = useImmerReducer(themeReducer, {
    colors: defaultColors,
  });

  useEffect(() => {
    let appStyle = document.getElementById("appStyle");
    if (!appStyle) {
      appStyle = document.createElement("style");
      appStyle.id = "appStyle";
      document.head.appendChild(appStyle);
    }
    console.log(appDark.toString());
    appStyle.innerHTML = JSON.stringify(
      theme.colors.theme === "dark" ? appDark : appLight
    );
  }, [theme]);

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

  const siderMenu: IMenuItem[] = [
    { label: "PIE", icon: <Icon type="pie-chart" />, url: "" },
    { label: "DESKTOP", icon: <Icon type="desktop" />, url: "" },
    {
      label: "PARENT",
      icon: <Icon type="team" />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "" },
        { label: "CHILD 2", url: "" },
      ],
    },
  ];
  const mainMenu = [];

  return axios
    .get("http://apiurl")
    .then((res) => {
      return {};
    })
    .catch((res) => {
      return {};
    });
};

export default MyApp;
