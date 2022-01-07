import React from "react";
import Header from "../common/template/header";
import Footer from "../common/template/footer";
import Sidebar from "../common/template/sideBar";
import Routes from "./routes";
import '../common/template/dependencies'

export default props => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                <Routes></Routes>
            </div>
            <Footer/>
        </div>
    )
}