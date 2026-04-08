import type { JSX } from "react";
import { Outlet } from "react-router-dom";

import Footer from "@/shared/components/layout/footer/footer";
import Header from "@/shared/components/layout/header";

const MainLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
