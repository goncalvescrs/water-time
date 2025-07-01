import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import WaterTime from "../../components/waterTime/WaterTime";
import ModalDrink from "../../components/modal/ModalDrink";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  dailyGoalCalculate,
  getEndOfDay,
  PreventPageReload,
} from "../../utils/functions";
import TabInfo from "../../components/tab/TabInfo";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/header/Header";
import AboutWaterTime from "../../components/about/AboutWaterTime";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import ModalSettings from "../../components/modalSettings/ModalSettings";
import { Button } from "react-bootstrap";

const Home = () => {
  const { userData, fetchUser } = useContext(UserContext);
  console.log("User na home: ", userData);

  const [show, setShow] = useState(false);
  const [cups, setCups] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [nextReminder, setNextReminder] = useState(new Date());
  const [currentBottleVolume, setCurrentBottleVolume] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [showSettings, setShowSettings] = useState(false);
  const [showButtonStart, setShowButtonStart] = useState(true);

  const waterGoal = dailyGoalCalculate(userData?.age, userData?.weight);
  const sleepHours = userData?.sleep;
  const bottleCapacity = userData?.bottle;
  const drinkingAmount = 250; // Quantidade de água a ser bebida em cada pausa
  const wakingHours = 24 - sleepHours; // Horas acordadas no dia
  const pauses = Math.ceil(waterGoal / drinkingAmount); // Número de pausas necessárias arredondado pra cima
  const interval = wakingHours / pauses; // Intervalo em horas entre as pausas
  const endOfDay = getEndOfDay(startTime, wakingHours); // Calcula o horario de termino

  function breakCalculate(age) {}

  useEffect(() => {
    fetchUser();
  }, [showSettings]);

  useEffect(() => {
    if (!isCounting) return;
    if (!toastShown) {
      toast.info("O timer já começou a contar!");
      setToastShown(true);
    }

    // Define o próximo lembrete
    const now = new Date();
    const firstReminder = new Date(now.getTime() + interval * 60 * 60 * 1000);
    setNextReminder(firstReminder);

    const reminderInterval = setInterval(() => {
      setShow(true); // Abre o modal após o intervalo inicial
      const next = new Date(new Date().getTime() + interval * 60 * 60 * 1000);
      setNextReminder(next);
    }, interval * 60 * 60 * 1000);

    return () => clearInterval(reminderInterval);
  }, [isCounting, interval]);

  // currentBottleVolume;

  const handleFinish = () => {
    toast.info("Acabou por Hoje! ");
    setIsCounting(false);
  };

  const handleCancel = () => {
    setCancel((prevCount) => prevCount + 1);
    setShow(false);
  };

  const handleAdd = () => {
    setCups((prevCount) => prevCount + 1);
    setShow(false);
    setCurrentBottleVolume((prevVolume) => {
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
        console.error("Erro ao atualizar o volume da garrafinha:", error);
        toast.error(
          "Ocorreu um erro ao tentar atualizar o volume da garrafinha."
        );
        return prevVolume;
      }
    });
  };

  function handleSave() {
    console.log("home: clicou em handleSave");
    setShowButtonStart(false);
  }

  const handleStart = () => {
    if (!userData.name) {
      setShowSettings(true);
    } else {
      setIsCounting(true);

      setShowButtonStart(false);
    }
    // setIsCounting(true);
  };

  return (
    <>
      <ModalSettings
        showSettings={showSettings}
        handleSave={handleSave}
        onClose={() => setShowSettings(false)}
        setShowButtonStart={setShowButtonStart}
      />
      <ModalDrink
        show={show}
        onClose={() => handleCancel()}
        onClick={() => handleAdd()}
      />
      <PreventPageReload />
      <ToastContainer hideProgressBar={true} />

      <div className={styles.outerContainer}>
        <div className={styles.topSide}>
          <Header handleSave={handleSave} />
          <WaterTime
            handleStart={handleStart}
            cups={cups}
            pauses={pauses}
            dailyGoal={waterGoal}
            currentBottleVolume={currentBottleVolume}
            bottleCapacity={bottleCapacity}
            endOfDay={endOfDay}
            handleFinish={() => handleFinish()}
            showButtonStart={showButtonStart}
          />
        </div>
        <div className={styles.bottonSide}>
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
  );
};

export default Home;
