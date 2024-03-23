import React, { useState, useEffect } from 'react';

export const Content = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('../database.json', {
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (      
        <div className="container col-xxl-8 px-4 py-5">
            {items.map((item) => (
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" key={item.id}>
                    <div className="col-lg-6">
                        <h3 className="display-5 lh-1 mb-3 text-center mb-5">{item.name}</h3>
                        <p className="lead">{item.description}</p>
                        <span className='float-end'>Principal jutsu: <span className='span-jutsu'>{item.jutsu}</span></span>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={`../img/${item.image}`} alt={item.name} className="w-100" loading="lazy" />
                    </div>
                </div>
            ))}
        </div>
    );
};
