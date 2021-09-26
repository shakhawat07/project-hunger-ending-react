import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    // total added 
    const total = cart.reduce((previous, person) => previous + 1, 0);
    // total donation and list of names 
    let totalDonation = 0;
    let namePerson = '';
    for (const person of cart) {
        totalDonation = totalDonation + person.donate;
        namePerson = namePerson + '\n' + person.name;
    }
    // console.log(namePerson);
    return (
        <div className="text-black cart mx-3">
            <h5><span className="text-black fw-bolder">Total Added:</span> {total}</h5>
            <h5><span className="text-black fw-bolder">Total Donation:</span> $ {totalDonation}</h5>
            <h5><span className="text-black fw-bolder">List of names:</span></h5>
            <h5 className="names">{namePerson}</h5>
        </div>
    );
};

export default Cart;