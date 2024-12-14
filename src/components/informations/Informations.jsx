const Informations = ({date, drinkWater, cancelWater, bottleCapacity, currentBottleVolume}) => {

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
            <div>
                <h1>Dados</h1>
                <p>Quantas vezes bebei água: {drinkWater} </p>
                <p>Quantas vezes cancelei: {cancelWater}</p>
                <p>Capacidade da garrafa: {`${currentBottleVolume} ml / ${bottleCapacity} ml`}</p>
                <p>Próximo lembrete para beber água: {nextDrink()}</p>
            </div>
        </>
    )
}

export default Informations;