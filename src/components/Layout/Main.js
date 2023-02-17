import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <Fragment>
      <div className="h-screen flex flex-col">
        <Header></Header>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export default Main;
