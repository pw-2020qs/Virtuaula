import React from 'react';


function Card(props: any) {
    return (
        <div className='card col-md-6' style={{backgroundColor: "#fceca3"}}>
            <img className='card-img-top' src={props.imgsrc} alt=""/>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>

                <div className='dropdown show d-flex flex-column'>
                    <a className='btn dropdown-toggle mt-auto' type='button'  id='dropdown-menu-link' role='button' aria-haspopup='true' aria-expanded='false' data-toggle='dropdown'>Menu</a>
                    <div className='dropdown-menu' aria-labelledby='dropdown-menu-link'>
                        <a href="" className='dropdown-item'>Assistir aulas</a>
                        <a href="" className='dropdown-item'>Ver atividades</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Card}