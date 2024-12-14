import { FaGlassWater } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import styles from './styles.module.css'
import { useEffect, useState } from "react";
import { formatarNumero } from "../../utils/functions";


const WaterTime = ({ ...props }) => {
    const [liters, setLiters] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const MAX_CUPS = props.pauses;
    const MAX_LITERS = formatarNumero(props.dailyGoal / 1000); // convertido para litros e formatado pra aparecer 1 numero apos o ponto
    const CUP_VOLUME = 250; // ML

    const updateWaterIntake = (cups) => { 
        const liters = (cups * CUP_VOLUME) / 1000; // Calcula litros baseados na quantidade de copos 
        setLiters(liters); 
        
        const percentage = Math.floor((cups / MAX_CUPS) * 100); // Calcula porcentagem baseada na quantidade de copos 
        setPercentage(percentage); 
    }; 
    
    useEffect(() => { 
        updateWaterIntake(props.cups);

        if (props.cups === MAX_CUPS) { 
            const timer = setTimeout(() => { 
                alert("Já tomou sua quantidade de água diária!"); 
            }, 3000); // 5 segundos de delay 

            return () => clearTimeout(timer); // Limpa o timer se o componente desmontar 
        } 
        
    }, [props.cups]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sideInfo}>
                    <FaGlassWater size={70} color='#2196f3'/>
                    <span className={styles.currentCups}>{`${props.cups}/${MAX_CUPS}`}</span>
                </div>
                <div>
                    <div className={styles.percentageContainer}>
                        <span className={styles.currentPercentage}>{`${percentage}%`}</span>
                        <div className={styles.progress} style={{height: `${percentage}%`}}></div>
                    </div>
                </div>
                <div className={styles.sideInfo}>
                    <IoWater size={70} color='#2196f3'/>
                    <span className={styles.currentLiters}>{`${liters}L/${MAX_LITERS}L`}</span>
                </div>
            </div>
        </>
    )


}

export default WaterTime;
