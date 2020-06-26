import React, { useContext } from "react";
import Link from "next/link";
import { Colors } from "styles/colors";
import {
  DispatchConfigContext,
  ConfigContext,
  DispatchThemeContext,
} from "store/initialConfig";
import { MainLayout } from "components/layouts";
import { ThemeContext } from "styled-components";
import { Button } from "antd";
import { ConfigActionType } from "common/@interface";

interface IProps {}
const Index: React.FC<IProps> = () => {
  const dispatchConfig = useContext(DispatchConfigContext);
  const config = useContext(ConfigContext);
  const dispatchTheme = useContext(DispatchThemeContext);
  const color = useContext(ThemeContext);

  return (
    <MainLayout>
      TEST
      <div>
        width: {config.width}, height: {config.height}
      </div>
      <Button
        onClick={() => {
          dispatchConfig({
            type: ConfigActionType.SET_SIDER_COLLAPSED,
            value: !config.siderCollapsed,
          });
        }}
      >
        Toggle Collapsed
      </Button>
      <Link href="/sample">
        <a>sample</a>
      </Link>
    </MainLayout>
  );
};

export default Index;
