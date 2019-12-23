import React, { useContext } from "react";
import { IMenuItem } from "common/@interface";
import { ThemeContext, styled } from "components/styled";

interface IProps {
  menus: IMenuItem[];
}

const SiderMenu: React.FC<IProps> = ({ menus }) => {
  const color = useContext(ThemeContext);

  const printMenuItem = (submenus: IMenuItem[], keyPrefix?: string) => {
    return submenus.map((menu, mi) => {
      const key = `${keyPrefix ? keyPrefix + "_" + mi : mi}`;
      if (menu.submenu) {
        return (
          <SubMenuContainer key={key}>
            {printMenuItem(menu.submenu, key)}
          </SubMenuContainer>
        );
      } else {
        return (
          <MenuItem key={key}>
            {menu.icon}
            <span>{menu.label}</span>
          </MenuItem>
        );
      }
    });
  };

  return <MenuContainer>{printMenuItem(menus)}</MenuContainer>;
};

const MenuContainer = styled.div``;
const SubMenuContainer = styled.div``;
const MenuItem = styled.div``;

export default SiderMenu;
