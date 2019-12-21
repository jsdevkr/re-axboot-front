import React, { useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import { ConfigContext } from "store/initialConfig";
import AXBootLogo from "components/AXBootLogo";
import { SMixinFlexRow } from "styles/styledMixin";
import { ThemeContext, styled } from "components/styled";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {}
const MainLayout: React.FC<IProps> = ({ children }) => {
  const config = useContext(ConfigContext);
  const color = useContext(ThemeContext);

  const contentMarginLeft = config.siderCollapsed
    ? config.siderCollapsedWidth
    : config.siderWidth;

  const Wrap = styled.div`
    font-size: 20px;

    .ant-menu-inline-collapsed {
      width: ${config.siderCollapsedWidth}px;
    }
    .ant-menu-inline-collapsed > .ant-menu-item,
    .ant-menu-inline-collapsed
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-item,
    .ant-menu-inline-collapsed
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-submenu
      > .ant-menu-submenu-title,
    .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
      padding: 0 22px !important;
    }
  `;

  return (
    <Wrap>
      <Layout>
        <Sider
          width={config.siderWidth}
          collapsed={config.siderCollapsed}
          collapsedWidth={config.siderCollapsedWidth}
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Logo collapsed={config.siderCollapsed}>
            <AXBootLogo color={color.white} />
            <label>AXBOOT</label>
          </Logo>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: contentMarginLeft }}>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            AXBOOT ©2019 Created by CHEQUER
          </Footer>
        </Layout>
      </Layout>
    </Wrap>
  );
};

const Logo = styled.div<{ collapsed: boolean }>`
  margin: 16px;
  height: 32px;
  ${SMixinFlexRow("center", "center")};
  svg {
    width: 30px;
    height: 30px;
  }
  label {
    margin-left: 10px;
    font-size: 20px;
    color: ${p => p.theme.white};
    font-weight: bold;
  }
  ${p => {
    if (p.collapsed) {
      return `label {display: none;}`;
    }
    return "";
  }}
`;
export default MainLayout;
