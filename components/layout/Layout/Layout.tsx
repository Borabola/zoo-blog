import { FC } from "react";
import MainNavigation from "../MainNavigstion/MainNavigation";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
