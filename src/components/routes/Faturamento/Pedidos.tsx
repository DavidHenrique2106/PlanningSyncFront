import React, { useState } from "react";
import { Card, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pedido: React.FC = () => {
  const [pedido, setPedido] = useState<string>("");
  const [data, setData] = useState<string>("");

  const handleAdicionar = () => {
    if (pedido !== "" && data !== "") {
      console.log({ pedido, data });
      toast.success("Pedido adicionado!!");
      setPedido("");
      setData("");
    } else {
      toast.error("Complete os campos em branco!");
    }
  };

  return (
    <div>
      <div className="Card">
        <Space direction="vertical" size={16}>
          <Card
            title="Fazer pedido"
            style={{ width: 300, border: "1px solid black", borderRadius: "8px" }}
            headStyle={{ borderBottom: "1px solid black" }}
          >
            <input
              type="text"
              value={pedido}
              placeholder="Sabor"
              onChange={(e) => setPedido(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="text"
              value={data}
              placeholder="ex: 21 de junho"
              onChange={(e) => setData(e.target.value)}
              style={{
                width: "100%",
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
