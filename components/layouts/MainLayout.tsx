import React, { useContext } from "react";
import { Menu, Icon } from "antd";
import { ConfigContext } from "store/initialConfig";
import AXBootLogo from "components/AXBootLogo";
import { SMixinFlexRow, SMixinFlexColumn } from "styles/styledMixin";
import styled, { ThemeContext } from "styled-components";
import SiderMenu from "./sider/SiderMenu";

interface IProps {}
const MainLayout: React.FC<IProps> = ({ children }) => {
  const config = useContext(ConfigContext);
  const color = useContext(ThemeContext);

  return (
    <Wrap>
      <Layout isRoot={true}>
        <Header>
          {/* <Logo collapsed={config.siderCollapsed}>
            <AXBootLogo color={color.layout_sider_text_color} />
            <label>AXBOOT</label>
          </Logo> */}
        </Header>

        <Layout hasSider={true}>
          <Sider width={config.siderWidth}>
            <SiderMenu menus={config.siderMenu} />
          </Sider>

          <Layout>
            <Content>{children}</Content>

            <Footer>
              <div></div>
              <div></div>
              <div>AXBOOT ©2019 Created by CHEQUER</div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  font-size: 20px;
`;

const Layout = styled.div<{ isRoot?: boolean; hasSider?: boolean }>`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
  position: relative;

  ${p => {
    if (p.isRoot) {
      return `height: 100%;`;
    }
    return ``;
  }}
  ${p => {
    if (p.hasSider) {
      return `flex-direction: row;`;
    }
    return ``;
  }}
`;
const Header = styled.div`
  flex: none;
  height: 60px;
`;
const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 24px;
`;
const Sider = styled.div<{ width?: number }>``;
const Footer = styled.div`
  flex: none;
  height: 30px;
  font-size: 12px;
  padding: 0 20px;
  ${SMixinFlexRow("space-between", "center")};
`;

// const Logo = styled.div<{ collapsed: boolean }>`
//   margin: 16px;
//   height: 32px;
//   ${SMixinFlexRow("center", "center")};
//   svg {
//     width: 30px;
//     height: 30px;
//   }
//   label {
//     margin: 0 10px;
//     font-size: 18px;
//     color: ${p => p.theme.layout_sider_text_color};
//     font-weight: bold;
//     letter-spacing: 1px;
//   }
//   ${p => {
//     if (p.collapsed) {
//       return `label {display: none;}`;
//     }
//     return "";
//   }}
// `;
export default MainLayout;
