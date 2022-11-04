// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar  from  "./components/navbar/navbar";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header> 
      <main>
        <Container>
          <AppRoutes/>
        </Container>
      </main>
    </div>
  );
}

export default App;