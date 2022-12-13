import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import CharRoute from "../components/containers/CharRoute/CharRoute";

// Crear nuestro objecto "routes"
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/hola",
      element: <div>Hola mundo</div>
    },
    {
      // :id --> parametro dinamico || cambiante
      path: "/personaje/:id",
      element: <CharRoute />
    }
  ]);

  export default router;