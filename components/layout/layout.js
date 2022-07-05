import MainNavigation from "./MainNavigstion/MainNavigation";

function Layout({children}) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
