'use client';

import { useState } from 'react';

export default function InteractiveCanvas() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showDedication, setShowDedication] = useState(false);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="controls">
        <button
          className="btn-primary"
          onClick={() => setShowCanvas(!showCanvas)}
        >
          {showCanvas ? 'Cerrar Interfaz' : 'Ejecutar Animación 🌻'}
        </button>
        <button
          className="btn-secondary"
          onClick={() => setShowDedication(!showDedication)}
          aria-expanded={showDedication}
        >
          {showDedication ? 'Ocultar Dedicatoria' : 'Ver Dedicatoria 💛'}
        </button>
      </div>

      {showDedication && (
        <p className="dedication" aria-live="polite">
          Para ti, que haces más bonito cada día: que nunca te falten motivos para sonreír,
          sueños por cumplir y flores amarillas que iluminen tu camino.
        </p>
      )}

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