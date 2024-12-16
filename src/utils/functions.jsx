import { useEffect } from "react";
import { toast } from "react-toastify";


export const dailyGoalCalculate = (idade, peso) => {
    
    if(idade && peso){
        let mlPorKg;
  
        switch (true) {
        case (idade <= 17):
            mlPorKg = 40;
            break;
        case (idade >= 18 && idade <= 55):
            mlPorKg = 35;
            break;
        case (idade >= 56 && idade <= 65):
            mlPorKg = 30;
            break;
        case (idade >= 66):
            mlPorKg = 25;
            break;
        default:
            throw new Error('Idade inválida');
        }
        const dailyGoal = peso * mlPorKg;
        return dailyGoal;

    } else {
        return toast.warn("Dados de usuario nao encontrado!");
    }

};

export function formatarNumero(valor) {
    return valor.toFixed(1);
}; 

export const PreventPageReload = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const confirmationMessage = "Tem certeza de que deseja sair desta página? Todas as mudanças não salvas serão perdidas.";
      event.preventDefault();
      event.returnValue = confirmationMessage; // Necessário para funcionar no Chrome
      return confirmationMessage; // Para outros navegadores
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};