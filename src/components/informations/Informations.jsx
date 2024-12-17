import react from 'react';
import styles from './styles.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { formatHours } from '../../utils/functions';


const Informations = ({date, cancel, endOfDay}) => {
    const nextDrink = formatHours(date.getHours(), date.getMinutes());
    const endTime = formatHours(endOfDay.getHours(), endOfDay.getMinutes());

    return (
        <>
            <div className={styles.container}>
                <h5>Informações da sua méta diaria</h5>
                <ul className={styles.infoBox}>
                    <li className={styles.textInfo}> 
                        <IoIosArrowForward size={20} style={{marginRight: "10px"}}/>

                        Horário do próximo lembrete: 
                        <span className={styles.info}> {nextDrink}</span>
                    </li>
                    {/* <li>
                        <IoIosArrowForward size={20} style={{marginRight: "10px"}}/>
                        Quantas vezes fiz a pausa: 
                        <span className={styles.info}> {cups}</span>
                    </li> */}
                    <li>
                        <IoIosArrowForward size={20} style={{marginRight: "10px"}}/>
                        Quantas vezes cancelei: 
                        <span className={styles.info}> {cancel}</span>
                    </li>
                    <li> 
                        <IoIosArrowForward size={20} style={{marginRight: "10px"}}/>
                        Horário Final: 
                        <span className={styles.info}> {endTime}</span>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default Informations;