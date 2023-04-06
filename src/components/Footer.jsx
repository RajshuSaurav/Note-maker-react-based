import React from "react";

function Footer () {
    const custumDate=new Date().getFullYear();
    return(
        <footer>
            <p>copyright &copy; {custumDate}</p>
        </footer>
    );
}

export default Footer;