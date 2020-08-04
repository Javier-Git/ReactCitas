import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista';

function App() {

  //LocalStorage
  
  let citasLocalStorage =  JSON.parse(localStorage.getItem('citas'));
  //Estado de las citas
  
  const [totalCitas, setCitas] = useState(citasLocalStorage ? citasLocalStorage : []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(totalCitas));
  }, [totalCitas])

  const eliminarCita = (id) => {
    setCitas(
      totalCitas.filter((cita) => {
        return cita.id !== id;
      })
    )
  };



  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario
            totalCitas = {totalCitas}
            setCitas = {setCitas} 
          />
        </div>
        <div className="one-half column">
          <h2>CITAS TOTALES</h2>
          {
            totalCitas.length ?
            totalCitas.map((cita) => 
              <Lista
                cita = {cita}
                key = {cita.id}
                eliminarCita = {eliminarCita}
             />
            )
            :
            <h2>No hay citas</h2>
          }
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
