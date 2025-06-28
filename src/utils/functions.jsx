import { useEffect } from "react";
import { toast } from "react-toastify";

export const dailyGoalCalculate = (age, weight) => {
  if (age > 0 && weight > 0) {
    let mlPerKg;
    switch (true) {
      case age <= 17:
        mlPerKg = 40;
        break;
      case age >= 18 && age <= 55:
        mlPerKg = 35;
        break;
      case age >= 56 && age <= 65:
        mlPerKg = 30;
        break;
      case age >= 66:
        mlPerKg = 25;
        break;
      default:
        throw new Error("Idade inválida.");
    }

    const dailyGoal = weight * mlPerKg;
    return dailyGoal;
  } else {
    toast.warn("Dados de usuario nao encontrado!");
  }
};

export function formatarNumero(valor) {
  return valor.toFixed(1);
}

export const PreventPageReload = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const confirmationMessage =
        "Tem certeza de que deseja sair desta página? O Contagem vai recomeçar.";
      event.preventDefault();
      event.returnValue = confirmationMessage; // Necessário para funcionar no Chrome
      return confirmationMessage; // Para outros navegadores
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export const getEndOfDay = (startTime, hoursAwake) => {
  const endOfDay = new Date(startTime);
  endOfDay.setHours(endOfDay.getHours() + hoursAwake);
  return endOfDay;
};

export const formatHours = (hours, minutes) => {
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};
