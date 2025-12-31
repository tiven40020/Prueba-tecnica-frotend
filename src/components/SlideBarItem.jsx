
function SidebarItem({ icon, label, isActive, onClick }) {
  return (
    <div 
      className={`sidebar-item ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      <img src={icon} alt={label} className="sidebar-icon" />
      <span className="sidebar-label">{label}</span>
    </div>
  );
}

export default SidebarItem;