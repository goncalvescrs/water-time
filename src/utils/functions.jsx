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
        return toast.warn("Dados de usuario nao encontrado!")
    }

};

export function formatarNumero(valor) {
    return valor.toFixed(1);
}; 

export const bbb = () => {
    

};  