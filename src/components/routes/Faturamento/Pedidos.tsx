import React, { useState } from "react";
import { Card, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Pedido: React.FC = () => {
  const [pedido, setPedido] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [doces, setDoces] = useState<string>("");
  const [salgados, setSalgados] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [nome, setNome] = useState<string>("");

  const handleAdicionar = async () => {
    if (
      pedido !== "" &&
      data !== "" &&
      valor !== undefined &&
      doces !== "" &&
      salgados !== "" &&
      hora !== "" &&
      nome !== ""
    ) {
      try {
        const response = await axios.post("http://localhost:8080/api/pedidos", {
          sabor: pedido,
          nome: nome,
          brigadeiro: doces,
          coxinha: salgados,
          data: data,
          horario: hora,
          valor: valor
        });
        console.log(response.data);
        toast.success("Pedido adicionado!!");
        setPedido("");
        setData("");
        setValor(0);
        setDoces("");
        setSalgados("");
        setHora("");
        setNome("");
      } catch (error) {
        toast.error("Erro ao adicionar pedido!");
        console.error(error);
      }
    } else {
      toast.error("Complete os campos em branco!");
    }
  };

  return (
    <div>
      <div
        className="Card"
        style={{ position: 'relative', top: '-50px' }}
      >
        <Space direction="vertical" size={16}>
          <Card className="CardA"
            title="Fazer pedido"
            style={{
              width: 300,
              border: "1px solid black",
              borderRadius: "8px",
            }}
            headStyle={{ borderBottom: "1px solid black" }}
          >
            <input
              type="text"
              value={pedido}
              placeholder="Ex: Sabor Bolo / Torta"
              onChange={(e) => setPedido(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={nome}
              placeholder="Ex: David, Anna.."
              onChange={(e) => setNome(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={doces}
              placeholder="Ex: 10 brigadeiro, 10..."
              onChange={(e) => setDoces(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={salgados}
              placeholder="Ex: 10 coxinhas, 10..."
              onChange={(e) => setSalgados(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={data}
              placeholder="Ex: 21 de junho-Segunda Feira"
              onChange={(e) => setData(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={hora}
              placeholder="Ex: 14h00"
              onChange={(e) => setHora(e.target.value)}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="number"
              value={valor}
              placeholder="Valor do Bolo em R$"
              onChange={(e) => setValor(Number(e.target.value))}
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <br />
            <button
              onClick={handleAdicionar}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#4CAF50",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Adicionar
            </button>
          </Card>
        </Space>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Pedido;
