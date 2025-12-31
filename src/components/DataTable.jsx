import React from "react";
import deleteIcon from '../assets/delete.png'
import editarIcon from '../assets/editar.png'
import joinIcon from '../assets/join.png'

function DataTable({ actions, currentPage, onPageChange, pagination }) {
  const { totalElements = 0, totalPages = 1 } = pagination || {};
  const pageSize = 10;

  const start = totalElements === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalElements);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre de la categoría</th>
            <th>Icono de la categoría</th>
            <th>Estado</th>
            <th>Descripción</th>
            <th>Fecha de creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {actions && actions.length > 0 ? (
            actions.map((item) => (
              <tr key={item.id || item._id}>
                <td>{item.name}</td>

                <td>
                  <div className="icon-wrapper">
                    <img
                      src={item.image || "https://via.placeholder.com/30"}
                      alt="icon"
                      style={{ width: "30px", borderRadius: "4px" }}
                    />
                  </div>
                </td>

                <td>
                  <span
                    className={`badge ${item.status ? "active" : "inactive"}`}
                  >
                    {item.status ? "Activo" : "Inactivo"}
                  </span>
                </td>

                <td>{item.description || "Sin descripción"}</td>

                <td>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "---"}
                </td>

                <td className="actions-cell">
                  <button className="action-btn" title="Editar">
                    <img
                      src={editarIcon}
                      alt="Editar"
                    />
                  </button>
                  <button className="action-btn" title="Eliminar">
                    <img
                      src= {deleteIcon}
                      alt="Eliminar"
                    />
                  </button>
                  <button className="action-btn" title="Ver">
                    <img
                      src= {joinIcon}
                      alt="Ver"
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination-footer">
        <div className="results-per-page">
          <span>Resultados por página: 10</span>
        </div>

        <div className="pagination-info">
          <span>{`${start} - ${end} de ${totalElements}`}</span>
          <div className="pagination-buttons">
            <button 
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
