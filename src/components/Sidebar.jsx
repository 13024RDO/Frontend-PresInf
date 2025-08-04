import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ user }) => {
  return (
    <aside className="bg-primary text-white p-3 d-flex flex-column align-items-center" style={{ minHeight: "115vh", width: "250px" }}>
      <img
        src={user.photo}
        alt="Foto de perfil"
        className="rounded-circle mb-3"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h2 className="h5">{user.name}</h2>
      <span className="mb-4 text-light">{user.role}</span>
      <nav className="w-100">
        <SidebarItem label="Dashboard" path="/" />
        <SidebarItem label="Pacientes" path="/pacientes" />
        <SidebarItem label="Calendario de Vacunación" path="/calendario" />
        <SidebarItem label="Control Nutricional" path="/nutricion" />
        <SidebarItem label="Alertas" path="/alertas" />
        <SidebarItem label="Gráficos Estadísticos" path="/graficos" />
        <SidebarItem label="Configuración" path="/configuracion" />
      </nav>
    </aside>
  );
};

export default Sidebar;
