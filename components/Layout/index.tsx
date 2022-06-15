import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: any) {
  return (
    <>
      <ToastContainer />
        <Header />
        {children}
        <Footer />
    </>
  );
}
