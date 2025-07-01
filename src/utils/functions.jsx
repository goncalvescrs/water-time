import { useEffect } from "react";

export const dailyGoalCalculate = (age, weight) => {
  if (age != null && weight != null) {
    let mlPerKg;
    if (age <= 17) {
      mlPerKg = 40;
    } else if (age <= 55) {
      mlPerKg = 35;
    } else if (age <= 65) {
      mlPerKg = 30;
    } else {
      mlPerKg = 25;
    }
    return weight * mlPerKg;
  }
  return null;
};

export function formatarNumero(valor) {
  return valor.toFixed(1);
}

export const PreventPageReload = (isCounting) => {
  useEffect(() => {
    if (!isCounting) return;
    const handleBeforeUnload = (event) => {
      event.preventDefault(); // Para a maioria dos navegadores
      event.returnValue = ""; // Chrome exige isso para exibir o alerta
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isCounting]);

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
