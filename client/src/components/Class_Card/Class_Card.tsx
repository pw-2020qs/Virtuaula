import React from 'react';
import { Link } from 'react-router-dom';


function Card(props: any) {

    return (
        <div className='card col-md-6' style={{backgroundColor: "#fceca3"}}>
            <Link to={`/curso/${props.id}`}>
            <img className='card-img-top' src={props.imgsrc} alt=""/>
            </Link>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>

                <div className='dropdown show d-flex flex-column'>
                    <button className='btn dropdown-toggle mt-auto'   id='dropdown-menu-link'  aria-haspopup='true' aria-expanded='false' data-toggle='dropdown'>Menu</button>
                    <div className='dropdown-menu' aria-labelledby='dropdown-menu-link'>
                        <Link to="/" className='dropdown-item'>Assistir aulas</Link>
                        <Link to="/" className='dropdown-item'>Ver atividades</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Card}