import { useState, useEffect } from "react";
import { fetchActions } from "../api/actions.api";

export const useActions = (pageNumber = 1, pageSize = 10) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchActions(pageNumber, pageSize);
        if (result && result.data && result.data.data) {
          setData(result.data.data); 
        } else {
          setData([]);
        }
      } catch (err) {
        setError(err.message || "Error");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [pageNumber, pageSize]);

  return { data, loading, error };
};
export default useActions;