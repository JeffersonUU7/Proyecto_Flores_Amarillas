'use client';

import { useState } from 'react';

export default function InteractiveCanvas() {
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="controls">
        <button 
          className="btn-primary"
          onClick={() => setShowCanvas(!showCanvas)}
        >
          {showCanvas ? 'Cerrar Interfaz' : 'Ejecutar Animación 🌻'}
        </button>
      </div>

      {showCanvas && (
        <div className="canvas-container">
          <iframe 
            src="/flores.html" 
            className="canvas-iframe"
            title="Jardín interactivo de Flores Amarillas"
          />
        </div>
      )}
    </div>
  );
}