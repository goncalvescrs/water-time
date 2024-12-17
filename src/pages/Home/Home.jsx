import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css'
import WaterTime from '../../components/waterTime/WaterTime';
import ModalDrink from '../../components/modal/ModalDrink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dailyGoalCalculate, getEndOfDay, PreventPageReload } from '../../utils/functions';
import TabInfo from '../../components/tab/TabInfo';
import { UserContext } from '../../context/UserContext';
import Header from '../../components/header/Header';
import AboutWaterTime from '../../components/about/AboutWaterTime';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const { userData } = useContext(UserContext);
    if(!userData || !userData.age) return;

    const [show, setShow] = useState(false);
    const [cups, setCups] = useState(0);
    const [cancel, setCancel] = useState(0);
    const [nextReminder, setNextReminder] = useState(new Date());
    const [currentBottleVolume, setCurrentBottleVolume] = useState(0);        
    const [isCounting, setIsCounting] = useState(()=> localStorage.getItem('userId') !== null); // Recupera o estado 'userId' do localStorage e define 'isCounting' como true ou false 
    const [toastShown, setToastShown] = useState(false); // Novo estado para controlar o toast
    const [startTime, setStartTime] = useState(new Date());

    const dailyGoal = dailyGoalCalculate(userData.age, userData.weight);
    const sleepHours = userData.sleepHours; 
    const bottleCapacity = userData.bottle;
    const drinkingAmount = 250; // Quantidade de água a ser bebida em cada pausa 
    const wakingHours = 24 - sleepHours; // Horas acordadas no dia 
    const pauses = Math.ceil(dailyGoal / drinkingAmount); // Número de pausas necessárias arredondado pra cima
    const interval = wakingHours / pauses; // Intervalo em horas entre as pausas
    const endOfDay = getEndOfDay(startTime, wakingHours); // Calcula o horario de termino

    const interval2 = 10/3600; // 10 segundos para teste

    useEffect(() => {
        setStartTime(new Date()); // Define o horário de início quando o componente é montado
    }, []);

    useEffect(() => { 
        if (userData && userData.age) { 
            setCurrentBottleVolume(userData.bottle); 
        } 
    }, [userData]);

    useEffect(() => {
        if (!isCounting) return; // inicia o contador quando algem logar

        if (!toastShown) { // Exibe um toast quando o contador começa 
            toast.info("O timer já começou a contar!"); 
            setToastShown(true); // Marca que o toast já foi exibido 
        };

        const now = new Date(); // Define o próximo lembrete
        const firstReminder = new Date(now.getTime() + interval * 60 * 60 * 1000);
        setNextReminder(firstReminder);

        const reminderInterval = setInterval(() => {

            setShow(true); // Abre o modal após o intervalo inicial
            const next = new Date(new Date().getTime() + interval * 60 * 60 * 1000);
            setNextReminder(next);

        }, interval * 60 * 60 * 1000);

        return () => clearInterval(reminderInterval);
    }, [isCounting, interval]);

    currentBottleVolume

    const handleFinish = () => {
        toast.info("Acabou por Hoje! ");
        setIsCounting(false);
    };

    const handleCancel = () => {
        setCancel(prevCount => prevCount + 1);
        setShow(false);
    };

    const handleAdd = () => {
        setCups(prevCount => prevCount + 1);
        setShow(false);
        setCurrentBottleVolume(prevVolume => {
            try {
              const newVolume = prevVolume - drinkingAmount;
              if (newVolume < drinkingAmount) {
                toast.warn("Sua garrafa está quase vazia. Por favor, encha-a!");
          
                setTimeout(() => {
                  setCurrentBottleVolume(bottleCapacity);
                }, 5000);
          
                return newVolume; 
              }
              return newVolume;
            } catch (error) {
              console.error('Erro ao atualizar o volume da garrafinha:', error);
              toast.error('Ocorreu um erro ao tentar atualizar o volume da garrafinha.');
              return prevVolume;
            }
        });
          
    };

    
    return (
        <>
            {show ? (
                <ModalDrink
                    show={show}
                    onClose={() => handleCancel()}
                    onClick={() => handleAdd()}
                />
            ) : null}
            <PreventPageReload />
            <ToastContainer 
                hideProgressBar={true}
            />

            <Header />
            <div className={styles.outerContainer}>
                <div className={styles.topSide}>
                    <WaterTime 
                        cups={cups}
                        pauses={pauses}
                        dailyGoal={dailyGoal}
                        currentBottleVolume={currentBottleVolume}
                        bottleCapacity={bottleCapacity}
                        endOfDay={endOfDay}
                        handleFinish={() => handleFinish()}
                    />
                    
                    <TabInfo 
                        date={nextReminder}
                        cups={cups}
                        cancel={cancel}
                        bottleCapacity={bottleCapacity}
                        currentBottleVolume={currentBottleVolume}
                        endOfDay={endOfDay}
                    />
                </div>
            </div>

            <AboutWaterTime />

            <Footer />

        </>
    )
}

export default Home;