import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Despesas.module.css";
import { useState } from "react";
import { Card, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Despesas = () => {
  const [despesas, setDespesas] = useState<number | undefined>(undefined);

  const handledespesas = () => {
    if (despesas !== undefined) {
      console.log(despesas);
      toast.success("Despesa adicionada");
      setDespesas(undefined);
    } else {
      toast.error("Adicione uma despesa");
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
            title="Sua despesa"
            style={{ width: 300, border: "1px solid black" }}
            headStyle={{ borderBottom: "1px solid black" }}
          >
            <input
              type="number"
              value={despesas ?? ""}
              onChange={(e) => setDespesas(Number(e.target.value))}
              placeholder="$$$"
              style={{
                position: "relative",
                right: "-35px",
                border: "1px solid black",
                borderRadius: "4px",
              }}
            />
            <br />
            <br />
            <br />
            <button
              onClick={handledespesas}
              style={{
                borderRadius: "10px",
                position: "relative",
                right: "-85px",
                top: "20px",
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

export default Despesas;
