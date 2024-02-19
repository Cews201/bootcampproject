import React from 'react';
import '../styles/perfil.css';


function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../images/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>                    
                    <strong>{props.nombre} </strong>en {props.pais}
                </p>
                <p className='cargo-perfil'>                    
                    <strong>{props.cargo} </strong>en {props.empresa}
                </p>
                <p className='texto-perfil'>                    
                    "{props.perfil}"
                </p>
            </div>
        </div>
    );
}
export default Perfil;