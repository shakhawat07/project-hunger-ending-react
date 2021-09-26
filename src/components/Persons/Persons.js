import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }
    return (
        <div className="persons-container">
            <div className="person-container">
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleAddToCart={handleAddToCart}
                    >

                    </Person>)
                }

            </div>
            <div className="total-show-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Persons;