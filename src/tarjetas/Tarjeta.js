import React from 'react'
import perfil from '../assets/img/img_avatar1.png'
const Tarjeta = ({nombres,description}) => {
    return (
        <>
            <div className="container mt-3">
                <h2>Perfil</h2>
                <div className="card" styleClass="width:400px">
                    <img className="card-img-top" src={perfil} alt="Card image"
                        styleClass="width:10%" />
                    <div className="card-body">
                        <h4 className="card-title">{nombres}</h4>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarjeta