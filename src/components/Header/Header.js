import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="pb-4 header">
            <h1 className="text-white bg-black py-3">Project Hunger Ending</h1>
            <div className="px-5 mx-5 text-white">
                <h4 className="px-5 mx-5 header-details fw-lighter">The Project Hunger Ending will remove starvation within 2030. These are the heroes who has donated money for solving hunger problems in the world.</h4>
                <h2 className="mb-0 fw-normal ">Total Donation: $154 Millions</h2>
            </div>
        </div>
    );
};

export default Header;