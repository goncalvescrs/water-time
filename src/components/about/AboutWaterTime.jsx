import React from 'react';
import styles from './styles.module.css';
import { TfiLayoutLineSolid } from "react-icons/tfi";


function AbautWaterTime() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Um Timer Online de Hidratação para Melhorar Seu Bem-Estar</h1>

      <h2 className={styles.heading2}>O que é o Water Time?</h2>
      <TfiLayoutLineSolid size={30} color='#F69D9A' style={{strokeWidth: '1'}} />
      <p className={styles.paragraph}>
        Water Time é um aplicativo personalizável que funciona tanto em navegadores 
        desktop quanto móveis. O objetivo deste aplicativo é ajudar você a manter-se 
        hidratado ao longo do dia, mesmo durante suas atividades diárias. Ideal para quem 
        precisa de lembretes regulares para beber água, o Water Time garante que você 
        alcance suas metas de hidratação de maneira prática e eficiente.
      </p>

      <h2 className={styles.heading2}>Como Funciona o Water Time?</h2>
      <TfiLayoutLineSolid size={30} color='#F69D9A' style={{strokeWidth: '1'}} />
      <p className={styles.paragraph}>
        Water Time é projetado para registrar as pausas para beber água ao longo do dia. 
        A quantidade de água recomendada é calculada com base no perfil da pessoa, mas 
        geralmente, sugere-se um mínimo de 2 litros por dia. O tempo entre cada pausa 
        varia dependendo do tempo que a pessoa fica acordada, mas é geralmente 
        distribuído ao longo de 16 horas. Cada pausa recomenda a ingestão de cerca de 
        250 ml de água.
      </p>

      <h2 className={styles.heading2}>Como Usar o Timer de Água?</h2>
      <TfiLayoutLineSolid size={30} color='#F69D9A' style={{strokeWidth: '1'}} />
      <ol className={styles.orderedList}>
        <li className={styles.listItem}>
          Configure seu perfil com informações básicas, como peso e tempo acordado.
        </li>
        <li className={styles.listItem}>
          Adicione tarefas que deseja concluir ao longo do dia.
        </li>
        <li className={styles.listItem}>
          Inicie o timer para monitorar suas pausas para hidratação.
        </li>
        <li className={styles.listItem}>
          Receba lembretes regulares para fazer pausas e beber água, conforme o 
          intervalo definido.
        </li>
        <li className={styles.listItem}>
          Ao final de cada dia, veja se atingiu a meta diária de hidratação com um 
          resumo dos dados.
        </li>
      </ol>

      <h2 className={styles.heading2}>Funcionalidades Básicas</h2>
      <TfiLayoutLineSolid size={30} color='#F69D9A' style={{strokeWidth: '1'}} />
      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
          Estimativa de Conclusão da Meta: Receba uma estimativa do tempo necessário 
          para alcançar sua meta diária de hidratação.
        </li>
        <li className={styles.listItem}>
          Adicionar Modelos: Salve suas tarefas repetitivas como modelos e adicione-os 
          com apenas um clique.
        </li>
        <li className={styles.listItem}>
          Relatórios Visuais: Veja quanto tempo você se manteve hidratado a cada dia, 
          semana e mês.
        </li>
        <li className={styles.listItem}>
          Configurações Personalizadas: Personalize o tempo entre as pausas, sons de 
          alarme e muito mais.
        </li>
      </ul>

      <h2 className={styles.heading2}>Funcionalidades Premium</h2>
      <TfiLayoutLineSolid size={30} color='#F69D9A' style={{strokeWidth: '1'}} />
      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
          Adicionar Projetos: Acompanhe quanto tempo você dedica a diferentes projetos 
          enquanto se mantém hidratado.
        </li>
        <li className={styles.listItem}>
          Relatórios Anuais: Visualize suas horas de foco e hidratação para cada ano.
        </li>
        <li className={styles.listItem}>
          Baixar Relatórios: Baixe seu histórico de hidratação em formato CSV.
        </li>
        <li className={styles.listItem}>
          Sem Limite de Modelos: Salve mais de 3 modelos.
        </li>
        <li className={styles.listItem}>
          Integração com Todoist: Carregue tarefas da sua conta Todoist.
        </li>
        <li className={styles.listItem}>
          Integração com Webhook: Conecte-se a outros aplicativos (Zapier, IFTTT, etc).
        </li>
        <li className={styles.listItem}>
          Sem Anúncios: Desfrute de um aplicativo limpo e sem distrações.
        </li>
      </ul>

      {/* <p className={styles.paragraph}>
        Water Time é projetado para melhorar seu bem-estar e garantir que você se mantenha 
        hidratado ao longo do dia, enquanto monitora suas atividades diárias. Vamos 
        começar a beber mais água e ser mais saudáveis juntos! 🚀💧
      </p> */}
    </div>
  );
}

export default AbautWaterTime;
