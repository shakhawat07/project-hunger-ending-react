import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Person.css'

const Person = (props) => {
    // console.log(props.person);
    const { name, worth, source, homeland, age, donate, img } = props.person;
    return (
        <div className="person row">

            <div className="col-md-9 col-lg-12 col-sm-7">

                <div className="card h-100 border border-light shadow-lg card-bg">
                    <div className="card-body">
                        <img src={img} className="card-img-top" alt="" />
                        <h5 className="card-title py-3 fs-3">{name}</h5>
                        <p><span className="text-dark fw-bolder">Worth:</span> {worth}</p>
                        <p><span className="text-dark fw-bolder">Age:</span> {source}</p>
                        <p><span className="text-dark fw-bolder">Homeland:</span> {homeland}</p>
                        <p><span className="text-dark fw-bolder">Age:</span> {age}</p>
                        <p><span className="text-dark fw-bolder">Donate:</span> {donate}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleAddToCart(props.person)}
                            className="btn btn-danger"
                        ><FontAwesomeIcon icon={faShoppingCart} /> add to cart
                        </button>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </div>
                </div>

            </div>
            {/* <div>
                <img src= alt="" />
            </div>
            <div>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </div> */}


        </div>
    );
};

export default Person;