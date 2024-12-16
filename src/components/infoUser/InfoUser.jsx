import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './styles.module.css'

const InfoUser = () => {
    const { userData } = useContext(UserContext);
    const name = userData?.name;
    const email = userData?.email;
    const weight = userData?.weight;
    const age = userData?.age;
    const sleep = userData?.sleepHours;

    return (
        <>
            <div className={styles.container}>
                <h5>Informações do perfil</h5>
                <ul className={styles.textInfo}>
                    <li> Nome: 
                        <span className={styles.info}> {name}</span>
                    </li>
                    <li> E-mail: 
                        <span className={styles.info}> {email}</span>
                    </li>
                    <li> Peso (kg) : 
                        <span className={styles.info}> {weight}</span>
                    </li>
                    <li> Idade: 
                        <span className={styles.info}> {age}</span>
                    </li>
                    <li> Horas de sono por dia: 
                        <span className={styles.info}> {sleep}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default InfoUser;