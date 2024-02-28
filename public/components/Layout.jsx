import React from 'react';

import Header from "./Header";
import PropTypes from 'prop-types';
import Footer from './Footer';
// import Styles from "../../src/App.css";

const Layout = ({children}) => {

    return (

        <>

            <Header />

            {children}
            {/* <div className={Styles.wave}></div>
            <div className={Styles.wave}></div>
            <div className={Styles.wave}></div> */}

            <Footer /> 

        </>

    );

}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };



export default Layout;