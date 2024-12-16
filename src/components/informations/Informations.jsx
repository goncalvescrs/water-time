import styles from './styles.module.css'

const Informations = ({date, cups, cancel, bottleCapacity, currentBottleVolume}) => {

    const nextDrink = () => {
        // const date = nextReminder
        const hours = date.getHours(); 
        const minutes = date.getMinutes();
        // Adiciona zero à esquerda se os minutos forem menores que 10 
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return (`${hours}:${formattedMinutes}`);
    }

    return (
        <>
            <div className={styles.container}>
                <h5>Informações da sua méta diaria</h5>
                <ul className={styles.textInfo}>
                    <li> Horário do próximo lembrete: 
                        <span className={styles.info}> {nextDrink()}</span>
                    </li>
                    <li> Quantas vezes fiz a pausa: 
                        <span className={styles.info}> {cups}</span>
                    </li>
                    <li> Quantas vezes cancelei: 
                        <span className={styles.info}> {cancel}</span>
                    </li>
                    <li> Capacidade total da garrafa: 
                        <span className={styles.info}> {`${bottleCapacity} ml`}</span>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default Informations;