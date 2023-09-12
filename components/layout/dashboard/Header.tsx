import { createElement, Dispatch, SetStateAction } from "react";
import { Avatar, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import styles from "../../../styles/layout/Dashboard.module.css";
import NotificationsDropDown from "../../misc/atoms/NotificationsDropDown";
// import AvatarDropdown from "../../dropdowns/admin/AvatarDropdown";

const { Header } = Layout;

const HeaderLayout = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Header
      className={"site_Layout__Background"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className="flex items-center gap-2">
        <NotificationsDropDown />
        {/* <Avatar className="cursor-pointer" /> */}
        {/* <AvatarDropdown /> */}
      </div>
    </Header>
  );
};

export default HeaderLayout;
