import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="text-white header pb-4">
            <h1 className="fw-1 bg-black py-3">Project Hunger Ending</h1>
            <div className="px-5 mx-5">
                <h4>Overcoming poverty is not a task of charity, it is and act of Justice. The project hunger ending will remove starvation within 2030. These are the heroes who will donate to solve the hunger problems in the world</h4>
                <h4 className="mb-0">Total Donation: $105 Millions</h4>
            </div>

        </div>
    );
};

export default Header;