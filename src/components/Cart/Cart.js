import React from 'react';

const Cart = (props) => {
    const { cart } = props;


    const total = cart.reduce((previous, person) => previous + 1, 0);
    // const totalDonation = cart.reduce(() => {(previous, person) => previous + , 0});
    let totalDonation = 0;
    let namePerson = '';
    for (const person of cart) {
        totalDonation = totalDonation + person.donate;
        namePerson = namePerson + '\n' + person.name;
    }
    return (
        <div className="text-black bg-white">
            <h4>Total Added : {total}</h4>
            <h4>Total Donation : {totalDonation}</h4>
            <h4>List of Names: {namePerson}</h4>

        </div>
    );
};

export default Cart;