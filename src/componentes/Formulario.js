import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ({totalCitas, setCitas}) => {

    //Estado del fomrulario
    const [cita, setCita] = useState({
        id: '',
        mascota: '',
        dueno: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    //Estado del error
    const [error, setError] = useState(false);

    //Funcion actualizar state
    const updateState = (event) => {
        setCita({
            ...cita,
            [event.target.name]: event.target.value,
            id: Math.round(Math.random() * 10000)
        })
    };
    //Extraer valores
    const {mascota, dueno, fecha, hora, sintomas} = cita;
    //Submit

    const submit = (event) => {
        
        event.preventDefault();
        //Validar
        if(mascota.trim() === '' || dueno.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === ''){
            console.log("Hay un error");
            //setCita(true);
            setError(true);
            return;
        }
        //Paso validacion
        setError(false);
        setCitas([...totalCitas, cita]);
        setCita({
            id: '',
            mascota: '',
            dueno: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    };

    return(
       <Fragment>
           <h2>Crear Cita</h2>
           {
               error ? <p className="alerta-error">Los campos son obligatorios</p>
               : null
           }
           <form
                onSubmit={submit}
           >
               <label>Nombre Mascota</label>
               <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={updateState}
                    value={mascota}
               />
               <label>Nombre Dueño</label>
               <input
                    type="text"
                    name="dueno"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={updateState}
                    value={dueno}
               />
               <label>Fecha</label>
               <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={updateState}
                    value={fecha}
               />
               <label>Hora</label>
               <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={updateState}
                    value={hora}
               />
               <label>Sintomas</label>
               <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={updateState}
                    value={sintomas}
               ></textarea>
               <button
                    type="submit"
                    className="u-full-width button-primary"
               >Guardar</button>
           </form>
       </Fragment>
    );
}

Formulario.propTypes = {
    setCita: PropTypes.func,
    totalCitas: PropTypes.array
}
export default Formulario;