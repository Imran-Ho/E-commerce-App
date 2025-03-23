import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <section>
        <Header></Header>
      </section>
      <main className="min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Main;
