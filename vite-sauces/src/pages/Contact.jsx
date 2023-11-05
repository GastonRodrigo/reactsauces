import React from 'react';

function Contacto() {
  return (
    <div>
      
      <p>¡Contáctanos para obtener más información!</p>

      <form>
        {/* Tu formulario de contacto aquí */}
      </form>

      <div>
        <h2>Ubicación del Local</h2>
        <p>Dirección: Pedro de Mendoza 512, San Isidro</p>
        <p>Teléfono: (123) 456-7890</p>
      </div>

      <div>
        <h2>Mapa</h2>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-378m356msr/locator-plus/16oc/locator-plus.html"
          width="1000px"
          height="600"
          style={{ border: '0' }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contacto;

