import logoBeKind from "../assets/beKingLogo.png";
import homeIcon from "../assets/home.png";
import impactoIcon from "../assets/impacto.png";
import comunidadIcon from "../assets/comunidad.png";
import sponsorIcon from "../assets/sponsors.png";
import marketplaceIcon from "../assets/marketplace.png";
import bakanesIcon from "../assets/bakanes.png";
import contenidosIcon from "../assets/contenidos.png";
import categoriasIcon from "../assets/categorias-acciones.png";
import cerrarSesionIcon from "../assets/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", icon: homeIcon },
  { name: "Impacto Social", icon: impactoIcon, active: true },
  { name: "Comunidad", icon: comunidadIcon },
  { name: "Sponsor", icon: sponsorIcon },
  { name: "Marketplace", icon: marketplaceIcon },
  { name: "Bakanes", icon: bakanesIcon },
  { name: "Contenidos", icon: contenidosIcon },
  { name: "Categorias de acciones", icon: categoriasIcon },
];

function Slidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoBeKind} alt="Be Kind" />
      </div>
      <div className="contenedor-nav">
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              <img src={item.icon} />
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <img src={cerrarSesionIcon} alt="logout" className="sidebar-icon" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
export default Slidebar;
