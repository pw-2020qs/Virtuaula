import React from 'react';


function Card(props: any) {
    return (
        <div className='card col-md-6' >
            <img className='card-img-top' src={props.imgsrc} alt=""/>
            <div className='card-body'>
                <h3 className='card-title'>{props.title}</h3>
            </div>
        </div>
    )
}

export {Card}