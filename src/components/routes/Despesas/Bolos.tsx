import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Bolos.module.css";

import "react-toastify/dist/ReactToastify.css";

const Bolos = () => {
 
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

export default Bolos;
