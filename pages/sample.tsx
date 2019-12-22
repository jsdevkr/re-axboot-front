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
import { ThemeContext } from "components/styled";

interface IProps {}
const App: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);
  const dispatchTheme = useContext(DispatchThemeContext);
  const color = useContext(ThemeContext);

  return (
    <>
      <div>
        width: {config.width}, height: {config.height}
        color : {color.black};
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
    </>
  );
};

export default App;
