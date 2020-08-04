import React, { Fragment } from 'react'

const Lista = ({cita, eliminarCita}) => {




    return(
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>Dueño: <span>{cita.dueno}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <p>Id: <span>{cita.id}</span></p>
                <button
                    onClick = {() => eliminarCita(cita.id)}
                    className = "button eliminar u-full-width"
                >Eliminar</button>
            </div>
        </Fragment>
    )
}

export default Lista;