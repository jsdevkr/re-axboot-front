import App from "next/app";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import { useImmerReducer } from "use-immer";
import "styles/app.ts";
import theme from "../styles/theme";
import {
  initialConfig,
  ConfigContext,
  DispatchConfigContext
} from "../store/initialConfig";
import { configReducer } from "../store/configReducer";

const MyApp: React.FC<any> = props => {
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

export default MyApp;
