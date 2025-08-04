import React, { useState } from 'react';

const Pacientes = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    dni: '',
    sexo: '',
    domicilio: '',
    localidad: '',
    provincia: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos paciente:', form);
    alert('Paciente registrado!');
    setForm({
      nombre: '', apellido: '', fechaNacimiento: '',
      dni: '', sexo: '', domicilio: '', localidad: '', provincia: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Registro de Paciente</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name="nombre" value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" name="apellido" value={form.apellido} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">DNI</label>
              <input type="number" className="form-control" name="dni" value={form.dni} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Sexo</label>
              <select className="form-select" name="sexo" value={form.sexo} onChange={handleChange} required>
                <option value="">Seleccione</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Domicilio</label>
              <input type="text" className="form-control" name="domicilio" value={form.domicilio} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Localidad</label>
              <input type="text" className="form-control" name="localidad" value={form.localidad} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Provincia</label>
              <input type="text" className="form-control" name="provincia" value={form.provincia} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Registrar Paciente</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
