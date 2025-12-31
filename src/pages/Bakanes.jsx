import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Slidebar"; 
import TabsNavigation from "../components/TabHeader";
import ActionBar from "../components/ActionBar";
import DataTable from "../components/DataTable";
import CreateCategoryModal from "../components/CreateCategoryModal";
import { useActions } from "../hooks/useActions";

function Bakanes() {
  const [activeTab, setActiveTab] = useState("Acciones");
  const [page, setPage] = useState(1);
  const { data, pagination, loading, error } = useActions(page, 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="contenedor-page-bakanes">
      <Header />
      <main>
        <div className="contenido-bakanes">
          <div className="contenedor-slider">
            <Sidebar />
          </div>
          <div className="categorias-content">
            <h1 className="page-title">Acciones</h1>
            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <ActionBar 
              onCreate={() => setIsModalOpen(true)} 
              onSearch={(val) => console.log(val)} 
            />

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}

            {!loading && !error && data && (
              <DataTable 
                actions={data} 
                currentPage={page}
                onPageChange={(p) => setPage(p)}
                pagination={pagination} 
              />
            )}
            <CreateCategoryModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bakanes;
