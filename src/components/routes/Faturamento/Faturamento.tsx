import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Faturamento.module.css";
import { Card, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faturamento: React.FC = () => {
  const [faturamento, setFaturamento] = useState<number | undefined>(undefined);
;
  const handleAdicionar = () => {
    if (faturamento !== undefined) {
      console.log(faturamento);
      toast.success("Sucesso!");
      setFaturamento(undefined);
    } else {
      toast.error("Digite um valor!");
    }
  };

  return (
    <div>
      <h1>
        <Link to="/" className={styles.Arrow}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </h1>

      <div className="Card">
        <Space direction="vertical" size={16}>
          <Card
            title="Seu faturamento"
            style={{ width: 300, border: '1px solid black' }}
            headStyle={{ borderBottom: '1px solid black' }}
          >
            <input
              type="number"
              value={faturamento ?? ''}
              onChange={(e) => setFaturamento(Number(e.target.value))}
              placeholder="$$$"
              style={{ position: 'relative', right: '-35px', border: '1px solid black', borderRadius: '4px' }}
            /> 
            <br />
            <br />
            <br />
            <button
              onClick={handleAdicionar}
              style={{ borderRadius: '10px', position: 'relative', right: '-85px', top: '20px' }}
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

export default Faturamento;
