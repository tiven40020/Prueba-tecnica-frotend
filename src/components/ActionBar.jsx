import lupaIcon from '../assets/lupa.png';
import filtro from '../assets/filtro.png';

function ActionBar({ onSearch, onCreate }) {
  return (
    <div className="action-bar">
      <div className="search-box">
        <img src={lupaIcon} alt="Search" className="icon-lupa search-icon" />
        
        <input 
          type="text" 
          placeholder="Buscar" 
          onChange={(e) => onSearch(e.target.value)} 
        />
        
        <button className="btn-filtros">
          <img src={filtro} alt="Filtro" className="img-filtro" />
          <span>Filtros</span>
        </button>
      </div>


      <button className="btn-create" onClick={onCreate}>
        Crear Categoria
      </button>
    </div>
  );
}

export default ActionBar;