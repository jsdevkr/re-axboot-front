/** @jsx jsx */
import React, { useContext } from "react";
import Link from "next/link";
import { jsx, css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Colors } from "styles/colors";
import {
  DispatchConfigContext,
  ConfigContext,
  DispatchThemeContext
} from "store/initialConfig";
import { ConfigActionType, ThemeType } from "common/@interface";
import { Button } from "antd";

interface IProps {}
const App: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);
  const dispatchTheme = useContext(DispatchThemeContext);
  const color = useTheme<Colors>();

  const danger = css`
    color: red;
    background: ${color.black};
  `;

  return (
    <>
      <div>
        width: {config.width}, height: {config.height}
      </div>
      <div css={danger}>DASHBOARD</div>
      <Button
        onClick={() =>
          dispatchConfig({ type: ConfigActionType.SET_WIDTH, value: 800 })
        }
      >
        setWidth
      </Button>
      <Button onClick={() => dispatchTheme({ type: ThemeType.dark })}>
        setDark
      </Button>
      <Button onClick={() => dispatchTheme({ type: ThemeType.light })}>
        setLight
      </Button>
    </>
  );
};

export default App;
