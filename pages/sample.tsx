import React, { useContext } from "react";
import Link from "next/link";
import { Colors } from "styles/colors";
import {
  DispatchConfigContext,
  ConfigContext,
  DispatchThemeContext
} from "store/initialConfig";
import { ConfigActionType, ThemeType } from "common/@interface";
import { Button } from "antd";
import { ThemeContext } from "styled-components";
import { MainLayout } from "components/layouts";

interface IProps {}
const App: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);
  const dispatchTheme = useContext(DispatchThemeContext);
  const color = useContext(ThemeContext);

  return (
    <MainLayout>
      <div>
        width: {config.width}, height: {config.height}
        color : {color.layout_sider_text_color}; theme : {color.theme};
      </div>
      <Link href="/">
        <a>home</a>
      </Link>
      <div>DASHBOARD</div>
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

      <div style={{ height: 1000 }} />
    </MainLayout>
  );
};

export default App;
