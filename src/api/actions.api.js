export const fetchActions = async (pageNumber, pageSize) => { 
  const token = localStorage.getItem('token');
  
  try {
    const response = await fetch(
      `https://dev.api.bekindnetwork.com/api/v1/actions/admin-list?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      }
    );

    if (!response.ok) {
      throw new Error('Error en la petición');
    }

    return await response.json();
  } catch (error) {
    console.error("Error en el fetch de acciones:", error);
    throw error;
  }
};

export const createAction = async (formData) => {
  const token = localStorage.getItem('token');
  
  const response = await fetch('https://dev.api.bekindnetwork.com/api/v1/actions/admin-add', {
    method: 'POST',
    headers: {
      
      'Authorization': `Bearer ${token}`
    },
    body: formData 
  });

  if (!response.ok) {
    throw new Error('Error al crear la acción');
  }

  return response.json();
};