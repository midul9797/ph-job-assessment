import type { MenuProps } from "antd";
import {
  DatabaseOutlined,
  ProfileOutlined,
  SolutionOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href={`/dashboard/projects`} style={{ fontSize: "1vw" }}>
          Projects
        </Link>
      ),
      key: "projects",
      icon: <UserOutlined />,
    },
  ];

  return defaultSidebarItems;
};
