import React, { Component, Fragment } from 'react';
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar"

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Sidebar/>
            </Fragment>
        )
    }
}
