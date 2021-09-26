import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import './Person.css'

const Person = (props) => {
    const { name, worth, source, homeland, age, donate, img } = props.person;
    return (
        // card body 
        <div className="row person">
            <div className="col">
                <div className="card h-100 border border-light shadow-lg card-background">
                    <div className="card-body">
                        <img src={img} className="card-img-top" alt="" />
                        <h5 className="card-title py-3 fs-3">{name}</h5>
                        <p><span className="text-dark fw-bolder">Age:</span> {age}</p>
                        <p><span className="text-dark fw-bolder">Net worth:</span> {worth}</p>
                        <p><span className="text-dark fw-bolder">Homeland:</span> {homeland}</p>
                        <p><span className="text-dark fw-bolder">Source of wealth:</span> {source}</p>
                        <p><span className="text-dark fw-bolder">Donated Amount: </span>$ {donate}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleAddToCart(props.person)}
                            className="btn btn-danger px-3"
                        ><FontAwesomeIcon icon={faDonate} /> <span className="px-2">Donate</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;