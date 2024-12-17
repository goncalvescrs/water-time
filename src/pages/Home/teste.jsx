import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Certifique-se de importar os estilos

const WaterIntakeTracker = (props) => {
  const { userData, isCounting, setIsCounting, toastShown, setToastShown } = props;
  const [startTime, setStartTime] = useState(new Date());
  const [nextReminder, setNextReminder] = useState(null);
  const [currentBottleVolume, setCurrentBottleVolume] = useState(userData.bottle);
  const [bottleReloaded, setBottleReloaded] = useState(false);

  const dailyGoal = dailyGoalCalculate(userData.age, userData.weight);
  const sleepHours = userData.sleepHours; 
  const bottleCapacity = userData.bottle;
  const drinkingAmount = 250; // Quantidade de água a ser bebida em cada pausa 
  const wakingHours = 24 - sleepHours; // Horas acordadas no dia 
  const pauses = Math.ceil(dailyGoal / drinkingAmount); // Número de pausas necessárias arredondado pra cima
  const interval = wakingHours / pauses; // Intervalo em horas entre as pausas
  const endOfDay = new Date(startTime.getTime() + wakingHours * 60 * 60 * 1000); // Calcula o horário de término do dia

  useEffect(() => {
    setStartTime(new Date()); // Define o horário de início quando o componente é montado
  }, []);

  useEffect(() => { 
    if (userData && userData.age) { 
      setCurrentBottleVolume(userData.bottle); 
    } 
  }, [userData]);

  useEffect(() => {
    if (!isCounting) return; // Inicia o contador quando alguém logar

    if (!toastShown) { // Exibe um toast quando o contador começa 
      toast.info("O timer já começou a contar!"); 
      setToastShown(true); // Marca que o toast já foi exibido 
    }

    // Define o próximo lembrete com base no intervalo
    const firstReminder = new Date(startTime.getTime() + interval * 60 * 60 * 1000);
    setNextReminder(firstReminder);

    const reminderInterval = setInterval(() => {
      const next = new Date(new Date().getTime() + interval * 60 * 60 * 1000);
      setNextReminder(next);

      setShow(true); // Abre o modal e define o próximo lembrete
    }, interval * 60 * 60 * 1000);

    return () => clearInterval(reminderInterval);
  }, [isCounting, interval, currentBottleVolume, userData, startTime, setShow, setNextReminder]);

  useEffect(() => {
    if (nextReminder) {
      console.log('Próximo lembrete em:', nextReminder);
    }
  }, [nextReminder]);

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

          return 0; // Retorna 0 para indicar que a garrafa está vazia
        }

        return newVolume;
      } catch (error) {
        console.error('Erro ao atualizar o volume da garrafinha:', error);
        toast.error('Ocorreu um erro ao tentar atualizar o volume da garrafinha.');
        return prevVolume;
      }
    });

    // Atualiza o próximo lembrete sem resetar para o horário inicial
    setNextReminder(prevReminder => {
      if (prevReminder) {
        const next = new Date(prevReminder.getTime() + interval * 60 * 60 * 1000);
        return next;
      }
      return new Date(new Date().getTime() + interval * 60 * 60 * 1000);
    });
  };

  return (
    <div>
      {/* O conteúdo do seu componente */}
    </div>
  );
};

export default WaterIntakeTracker;
