import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Calendario from './pages/Calendario';
import Alertas from './pages/Alertas';
import Graficos from './pages/Graficos';
import Configuracion from './pages/Configuracion';

const user = {
  name: "Dra. Fernanda Gómez",
  role: "Enfermera Jefa",
  photo: "https://randomuser.me/api/portraits/women/44.jpg"
};

const App = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-white border-end px-0">
          <Sidebar user={user} />
        </div>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 py-4 px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/alertas" element={<Alertas />} />
            <Route path="/graficos" element={<Graficos />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
