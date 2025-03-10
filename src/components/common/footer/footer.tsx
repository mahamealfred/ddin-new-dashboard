import  { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center">
                <div className="container">
                    <span className="text-gray dark:text-defaulttextcolor/50"> Copyright © <span id="year">2025</span> <Link to="#"  className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor">DDIN Group Ltd</Link>. Designed by <Link to="https://ddin.rw/"> <span className="font-semibold text-primary underline">DDIN Team</span> </Link> All rights reserved </span>
                </div>
            </footer>

        </Fragment>
    );
};

export default Footer;
