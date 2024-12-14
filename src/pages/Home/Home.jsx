import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import WaterTime from '../../components/waterTime/WaterTime';
import Informations from '../../components/informations/Informations';
import ModalDrink from '../../components/modal/ModalDrink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dailyGoalCalculate } from '../../utils/functions';

const Home = () => {
    const dailyGoal = dailyGoalCalculate(23, 56);
    const sleepHours = 7.5;
    const bottleCapacity = 500; // Capacidade da garrafinha em ml 

    const drinkingAmount = 250; // Quantidade de água a ser bebida em cada pausa 
    const wakingHours = 24 - sleepHours; // Horas acordadas no dia 
    const pauses = Math.ceil(dailyGoal / drinkingAmount); // Número de pausas necessárias arredondado pra cima
    const interval1 = wakingHours / pauses; // Intervalo em horas entre as pausas
    const interval = 15/3600; // 10 segundos para teste


    const [show, setShow] = useState(false);
    const [cups, setCups] = useState(0);
    const [cancel, setCancel] = useState(0);
    const [nextReminder, setNextReminder] = useState(new Date());
    const [currentBottleVolume, setCurrentBottleVolume] = useState(bottleCapacity);
    const [bottleAlmostEmpty, setBottleAlmostEmpty] = useState(false); // Novo estado para controlar quando a garrafa está quase vazia

    const handleCancel = () => {
        setCancel(prevCount => prevCount + 1);
        setShow(false);
    };
    const handleAdd = () => {
        setCups(prevCount => prevCount + 1);
        setShow(false);
        setCurrentBottleVolume(prevVolume => {
            const newVolume = prevVolume - drinkingAmount;
            if(newVolume < drinkingAmount) {
                // setBottleAlmostEmpty(true);
                toast.warn("Sua garrafinha está quase vazia. Por favor, encha a garrafinha!");
                setTimeout(() => { setCurrentBottleVolume(bottleCapacity); }, 5000);
                return newVolume;
            }
            return newVolume;
        });
    };
    

    console.log(sleepHours);
    console.log(wakingHours);
    console.log(interval1);

    useEffect(() => {
        const now = new Date(); // Define o próximo lembrete
        const firstReminder = new Date(now.getTime() + interval * 60 * 60 * 1000);
        setNextReminder(firstReminder);

        const reminderInterval = setInterval(() => {
            setShow(true); // Abre o modal 

            const next = new Date(new Date().getTime() + interval * 60 * 60 * 1000);
            setNextReminder(next);
        }, interval * 60 * 60 * 1000);

        return () => clearInterval(reminderInterval);
    }, [interval, currentBottleVolume]);
    
    return (
        <>
            {show ? (
                <ModalDrink
                    show={show}
                    onClose={() => handleCancel()}
                    onClick={() => handleAdd()}
                />
            ) : null}
            <ToastContainer />

            <h1>Water Time</h1>

            <WaterTime 
                cups={cups}
                pauses={pauses}
                dailyGoal={dailyGoal}
            />

            <Informations 
                date={nextReminder}
                drinkWater={cups}
                cancelWater={cancel}
                bottleCapacity={bottleCapacity}
                currentBottleVolume={currentBottleVolume}
            />


        </>
    )
}

export default Home;