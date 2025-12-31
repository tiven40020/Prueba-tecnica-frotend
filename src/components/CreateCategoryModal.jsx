import React, { useState, useRef } from 'react';
import cargarIcon from '../assets/cargar-archivo.png';
import { createAction } from '../api/actions.api'; 

const CreateCategoryModal = ({ isOpen, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '',
    isActive: true,
    logo: null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description' && value.length > 200) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logo: file });
    }
  };

const handleSubmit = async () => {
  setLoading(true);
  setError(null);

  try {
    const dataToSend = new FormData();
    dataToSend.append('Name', formData.name);
    dataToSend.append('Description', formData.description);
    dataToSend.append('HexCode', formData.color || '#FFFFFF');
    // dataToSend.append('IsActive', 'true'); 

    if (formData.logo) {
      dataToSend.append('Icon', formData.logo); 
    }

    await createAction(dataToSend);
    
    onRefresh();
    onClose();
    alert("¡Acción creada con éxito!");
    
  } catch (err) {
    setError("Error 400: El servidor rechaza el formato. Revisa la consola.");
    console.error("Error detallado:", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Crear categoria</h2>
          <button className="close-btn" onClick={onClose} disabled={loading}>&times;</button>
        </div>

        <div className="modal-body">
          {error && <p className="error-message-modal">{error}</p>}
          
          <div className="input-group">
            <label>Nombre de la categoria*</label>
            <input 
              type="text" 
              name="name"
              placeholder="Escribe el nombre de la buena acción" 
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Descripción de la buena acción*</label>
            <textarea 
              name="description"
              placeholder="Agregar descripción" 
              value={formData.description}
              onChange={handleChange}
              disabled={loading}
            />
            <span className={`char-count ${formData.description.length >= 190 ? 'limit' : ''}`}>
              {formData.description.length}/200
            </span>
          </div>

          <div className="input-group">
            <label>Logo*</label>
            <div className="file-input">
              <input 
                type="text" 
                placeholder="Carga archivo" 
                value={formData.logo ? formData.logo.name : ""} 
                readOnly 
              />
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
                accept="image/*"
              />
              <button 
                className="upload-icon" 
                onClick={handleUploadClick} 
                type="button"
                disabled={loading}
              >
                <img src={cargarIcon} alt="Cargar" />
              </button>
            </div>
          </div>

          <div className="input-group">
            <label>Color*</label>
            <input 
              type="text" 
              name="color"
              placeholder="Registra color codigo HEX (Ej: #FF5733)" 
              value={formData.color}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="switch-group">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={formData.isActive}
                onChange={() => setFormData({...formData, isActive: !formData.isActive})}
                disabled={loading}
              />
              <span className="slider round"></span>
            </label>
            <span className="switch-label">Activo</span>
          </div>
        </div>

        <div className="modal-footer">
          <button 
            className="btn-cancel" 
            onClick={onClose} 
            disabled={loading}
          >
            Cancelar
          </button>
          <button 
            className={`btn-crear ${formData.name && !loading ? 'active' : ''}`}
            disabled={!formData.name || loading}
            onClick={handleSubmit}
          >
            {loading ? 'Cargando...' : 'Crear'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryModal;