import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";
import { IoIosArrowForward } from "react-icons/io";

const InfoUser = () => {
  const { userData } = useContext(UserContext);
  const name = userData?.name;
  const weight = userData?.weight;
  const age = userData?.age;
  const sleep = userData?.sleep;

  return (
    <>
      <div className={styles.container}>
        <h5>Informações do perfil</h5>
        <ul className={styles.textInfo}>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Nome:
            <span className={styles.info}> {name || "---"}</span>
          </li>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Idade:
            <span className={styles.info}> {age || "---"}</span>
          </li>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Peso (kg) :<span className={styles.info}> {weight || "---"}</span>
          </li>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Horas de sono por dia:
            <span className={styles.info}> {sleep || "---"}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InfoUser;
