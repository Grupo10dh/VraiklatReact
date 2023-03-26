import React from "react";
import { Link } from "react-router-dom";

//sfc
const LandingPage = () => {
    return (
        <>
            <h4>Landing page</h4>
            <Link to='/productos'>
                <button>Entrar</button>
            </Link>
        </>
    );
}
 
export default LandingPage;
