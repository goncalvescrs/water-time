import react from "react";
import styles from "./styles.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { formatHours } from "../../utils/functions";

const Informations = ({ date, cancel, endOfDay }) => {
  const nextDrink = date ? formatHours(date.getHours(), date.getMinutes()) : 0;
  const endTime = isNaN(endOfDay)
    ? null
    : formatHours(endOfDay?.getHours(), endOfDay?.getMinutes());
  return (
    <>
      <div className={styles.container}>
        <h5>Informações da sua méta diaria</h5>
        <ul className={styles.infoBox}>
          <li className={styles.textInfo}>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Horário do próximo lembrete:
            <span className={styles.info}> {nextDrink}</span>
          </li>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Horário do lembrete Final:
            <span className={styles.info}> {endTime ? endTime : 0}</span>
          </li>
          <li>
            <IoIosArrowForward size={20} style={{ marginRight: "10px" }} />
            Quantas vezes cancelei:
            <span className={styles.info}> {cancel}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Informations;
