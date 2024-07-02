import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from './Despesas.module.css';

const Despesas = () => {
  return (
    <div>
      <h1>
        <Link to="/" className={styles.Arrow}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </h1>
    </div>
  );
};

export default Despesas;
