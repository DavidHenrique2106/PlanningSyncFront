import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<string>('http://localhost:8080/api/hello');
        setData(response.data);
      } catch (error) {
        setError('Erro ao buscar a mensagem da API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>{data || 'Sem dados'}</h1>
    </div>
  );
}

export default App;
