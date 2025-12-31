
function TabsNavigation({ activeTab, setActiveTab }) {
  const tabs = ['Categorias', 'Tipos', 'Evidencias'];
  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabsNavigation;