import Flower from "./componentes/flower";
import InteractiveCanvas from "./componentes/interactiveCanvas";

export default function Home() {
  return (
    <main>
      <div className="header-container">
        <h1>🌻 Jardín de Código 🌻</h1>
        <p>Proyecto desarrollado por Jefferson | Ingeniería en Desarrollo de Software - UNIVO 💛</p>
      </div>

      <div className="garden">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>

      <InteractiveCanvas />
    </main>
  );
}