import { faHeadset, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ComoFunciona.css';

const ComoFunciona = () => (
  <section className="como-funciona">
    <div className="heading">
      <span>¿Cómo funciona</span>
      <h1>Munaycha Explorer</h1>
    </div>
    <div className="box-container">
      <div className="box-indicacion">
        <FontAwesomeIcon icon={faSearch} />
        <h3>1. Busqueda</h3>
        <p>Elige tour/tours que sean de tu interes</p>
      </div>
      <div className="box-container">
        <div className="box-indicacion">
          <FontAwesomeIcon icon={faShoppingCart} />
          <h3>2. Al carrito</h3>
          <p>Agrega los tours elegidos al carrito</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box-indicacion">
          <FontAwesomeIcon icon={faSearch} />
          <h3>3. Inicia Sesion</h3>
          <p>Registrate e inicia sesion (es facil y rapido)</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box-indicacion">
          <FontAwesomeIcon icon={faSearch} />
          <h3>4. Preguntanos</h3>
          <p>
            Desde el carrito puedes solicitar información especifica.
            Indicanos el nro de pasajeros y toda la informacion que te sea posible.
          </p>
        </div>
      </div>
      <div className="box-container">
        <div className="box-indicacion">
          <FontAwesomeIcon icon={faSearch} />
          <h3>5. Pagar</h3>
          <p>
            Puedes confirmar el tour, pagando por el en cualquier momento
            (el precio varia segun el nro de pax y actividades extra)
          </p>
        </div>
      </div>
      <div className="box-container">
        <div className="box-indicacion">
          <FontAwesomeIcon icon={faHeadset} />
          <h3>6. Contacto</h3>
          <p>
            Enviaremos un correo (o una llamada) con la información de los tours que solicitaste,
            segun la informacion que nos enviaste.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
