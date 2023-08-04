export default {
  pt: {
    headerSwitcher: {
      save: "Salvar",
      upToDate: "Já atualizado",
      load: "Load",
    },
    infoTable: {
      sendButton: "Salvar Notas",
      group: "Grupo",
    },
    accountSelectionModal: {
      heading: "Selecione a conta desejada",
      label: "Contas disponíveis",
      primaryText: "Selecionar",
      secondaryText: "Cancelar",
      inputLabel1: "Contas",
    },
    modal: {
      heading: "Informações de conexão com Db2",
      label: "Instância e Tabela consultadas",
      primaryText: "Recarregar",
      secondaryText: "Salvar",
      selectAnOption: "Selecione uma opção",
      alert: "Por favor, selecione uma das instâncias listadas",
      inputLabel1: "Selecione a instância do Db2 desejada",
      inputLabel2: "Insira o título da tabela a ser consultada",
    },
    cognosModal: {
      heading: "Credenciais de uso do Cognos",
      label: "Instâncias consultadas",
      primaryText: "Recarregar",
      secondaryText: "Salvar",
      tab1: "Cognos",
      tab2: "Cloudant",
      tab3: "Db2",
      tab4: "Tabelas",
      selectAnOption: "Selecione uma opção",
      alert: "Por favor, selecione uma das instâncias listadas",
      inputLabel1: "Selecione a instância do Cognos desejada",
      inputLabel2: "Selecione a instância do Cloudant desejada",
      inputLabel3: "Insira a database do Cloudant desejada",
      inputLabel4: "Selecione a instância do Db2 desejada",
      inputLabel5: "Insira o link do módulo xsd",
      inputLabel6: "Insira o driver Jdbc",
      inputLabel7: "Tabela de logs",
      inputLabel8: "Tabela de conversas",
      inputLabel9: "Tabela de telefonemas",
      inputLabel10: "Tabela de variáveis de contexto",
      inputLabel11: "Tabela de caminhos de conversa",
      inputLabel12: "Tabela de visão geral",
      inputLabel13: "Tabela de distribuição de classes",
      inputLabel14: "Tabela de precisão @k",
      inputLabel15: "Tabela de acurácia de classes",
      inputLabel16: "Tabela de intenções confundidas",
      inputLabel17: "Tabela de acurácia vs cobertura",
    },
    saveModal: {
      heading:
        "Insira o nome que deseja dar ao dashboard. Este será automaticamente configurado como Dashboard default",
      label: "Salvar Dashboard no Cloudant",
      primaryText: "Salvar",
      secondaryText: "Cancelar",
      inputLabel1: "Nome (ID) do Dashboard",
    },
    loadModal: {
      heading:
        "Insira o nome do dashboard que deseja buscar. Este será automaticamente configurado como Dashboard default",
      label: "Buscar Dashboard no Cloudant",
      primaryText: "Buscar",
      secondaryText: "Cancelar",
      inputLabel1: "Nome (ID) do Dashboard",
    },
    modalHelp: {
      heading: "Ajuda",
      text: "Esta tabela exibe a troca de mensagens entre cliente e Assistente, destacando qual foi a intent compreendida pelo assistente na mensagem recebida. Com estas informações, o curador pode avaliar o desempenho do assistente no nível de mensagem.",
    },
    cognosModalHelp: {
      heading: "Ajuda",
      text: "Esta página exibe um dashboard interativo que apresenta métricas para auxiliar o processo de curadoria do assitente.",
    },
    homeHelp: {
      heading: "Ajuda",
      text: "Nesta homepage, selecione a ação que deseja tomar nos cards abaixo. Caso tenha dúvidas de qual o passo-a-passo proposto, acompanhe o modal disponível no canto direito inferior.",
    },
    modalWarning: {
      heading: "Aviso",
      text: "Não foi possível realizar a conexão com a base de dados através dos dados fornecidos. Por favor verifique as informações inseridas e tente novamente.",
      caption: "",
    },
    standardDashboardModal: {
      heading: "Aviso",
      text: "Inicializando Dashboard Padrão.",
      caption: "",
    },
    modalSuccess: {
      heading: "Sucesso!",
      text: "Conexão realizada com sucesso.",
      caption: "",
    },
    tabs: {
      itensPerPage: "Itens por página",
    },
    home: {
      welcome: "Bem vindo ao Assistant Curator!",
      cardHeader1: "Avaliação de conversação",
      cardHeader2: "Desempenho na conversação",
      cardHeader3: "Qualidade de Treinamento",
      cardContent1:
        "Apresenta a conversa entre cliente e assistente no nível de troca de mensagens para avaliação humana de sua assertividade, atribuindo uma pontuação (1 - 5).",
      cardContent2:
        "Ele fornece uma interface para a construção e visualização de painéis interativos, com o IBM Cognos Dashboard, que mostra o desempenho do Assistente ao longo do tempo.",
      cardContent3:
        "Mostra gráficos baseados em dados de Experimentos realizados utilizando as Intenções e a árvore de conversação do Assistente.",
    },
    intentModal: {
      description:
        "Para melhorar seu Assistente Watson, tome as seguintes medidas.",
      step1: "Verificar dados",
      step2: "Abra seu Assistant",
      step3: "Edite as Intents",
      step4: "Dê uma nota",
      step5: "Dados de Conversas",
      step6: "Rodar Experimentos",
      step7: "Verificar e repetir",
      content1:
        "Veja os gráficos de treinamento das suas intents para encontrar possíveis confusões no seu Assisant. Esses gráficos são baseados somente na forma como seu Assistant está configurado.",
      content2:
        "Vá até a instância do seu Assistant e abra a página de intents da Skill de Diálogo que deseja alterar.",
      content3:
        "Faça as alterações necessárias, de acordo com os dados encontrados no passo 1. Você pode alterar ou remover os exemplos de uma intent com menos precisão.",
      content4:
        "Vá para a tela de Nota de Curadoria enriqueça os dados com uma nota humana para comparar com a confiança do Assistant. Para uma melhor análise, avalie pelo menos 50 mensagens.",
      content5:
        "Veja os gráficos de dados de interações do seu Assistant com seus usuários para melhor entender a como seus usuários estão interagindo com seu Assistant e verificar possíveis falhas na sua árvore de conversa e suas intents.",
      content6:
        "Depois de verificar os dados e fazer as alterações necessárias, roda a função de experimentos novamente para gerar novas métricas.",
      content7:
        "Depois de completar todos os passos você já terá uma nova visão do seu Assistant. Acompanhe o uso do Assistant e monitore as necessidades de alterações, repetindo esses passos.",
    },
  },
  es: {
    headerSwitcher: {
      save: "Guardar",
      upToDate: "Já actualizado",
      load: "Cargar",
    },
    infoTable: {
      sendButton: "Guardar Notas",
      group: "Grupo",
    },
    accountSelectionModal: {
      heading: "Seleccione la cuenta deseada",
      label: "Cuentas disponibles",
      primaryText: "Seleccione",
      secondaryText: "Cancelar",
      inputLabel1: "Cuentas",
    },
    modal: {
      heading: "Información de conexión de Db2",
      label: "Instancia y Tabla consultada",
      primaryText: "Recargar",
      secondaryText: "Guardar",
      selectAnOption: "Seleccione una opción",
      alert: "Seleccione una de las instancias enumeradas",
      inputLabel1: "Seleccione la instancia de Db2 deseada",
      inputLabel2: "Introduzca el título de la tabla a consultar",
    },
    cognosModal: {
      heading: "Credenciales de uso de Cognos",
      label: "Instancias consultadas",
      primaryText: "Recargar",
      secondaryText: "Guardar",
      tab1: "Cognos",
      tab2: "Cloudant",
      tab3: "Db2",
      tab4: "Tablas",
      selectAnOption: "Seleccione una opción",
      alert: "Seleccione una de las instancias enumeradas",
      inputLabel1: "Seleccione la instancia de Cognos deseada",
      inputLabel2: "Seleccione la instancia de Cloudant deseada",
      inputLabel3: "Inserte la base de datos Cloudant deseada",
      inputLabel4: "Seleccione la instancia de Db2 deseada",
      inputLabel5: "Inserte el enlace del módulo xsd",
      inputLabel6: "Inserte el driver Jdbc",
      inputLabel7: "Tabla de registros",
      inputLabel8: "Tabla de conversaciónes",
      inputLabel9: "Tabla de llamadas telefonicas",
      inputLabel10: "Tabla de variables de contexto",
      inputLabel11: "Tabla de ruta de conversación",
      inputLabel12: "Tabla de resumen",
      inputLabel13: "Tabla de distribución de clases",
      inputLabel14: "Tabla de precisión @k",
      inputLabel15: "Tabla de precisión de clase",
      inputLabel16: "Tabla de intenciones confusas",
      inputLabel17: "Tabla de precisión versus cobertura",
    },
    saveModal: {
      heading:
        "Ingrese el nombre que desea darle al Dashboard. Esto se establecerá automáticamente como el Dashboard default",
      label: "Guardar Dashboard en Cloudant",
      primaryText: "Salvar",
      secondaryText: "Cancelar",
      inputLabel1: "Nombre (ID) del Dashboard",
    },
    loadModal: {
      heading:
        "Ingrese el nombre del Dashboard que desea buscar. Esto se establecerá automáticamente como el Dashboard default",
      label: "Busca de Dashboard en Cloudant",
      primaryText: "Buscar",
      secondaryText: "Cancelar",
      inputLabel1: "Nombre (ID) del Dashboard",
    },
    modalHelp: {
      heading: "Ayuda",
      text: "Esta tabla muestra el intercambio de mensajes entre el cliente y el Asistente, destacando qué intención entendió el asistente en el mensaje recibido. Con esta información, el curador puede evaluar el desempeño del asistente a nivel del mensaje.",
    },
    cognosModalHelp: {
      heading: "Ayuda",
      text: "Esta página muestra un tablero interactivo que presenta métricas para respaldar el proceso de curación del asistente.",
    },
    homeHelp: {
      heading: "Ayuda",
      text: "En esta página de inicio, seleccione la acción que desea realizar de las tarjetas abajo. Si tienes dudas sobre el paso a paso propuesto, sigue el modal disponible en la esquina inferior derecha.",
    },
    modalWarning: {
      heading: "Error!",
      text: "No fue posible conectarse a la base de datos utilizando los datos proporcionados. Verifique la información ingresada y vuelva a intentarlo.",
      caption: "",
    },
    standardDashboardModal: {
      heading: "Aviso",
      text: "Inicializando el Dashboard predeterminado.",
      caption: "",
    },
    modalSuccess: {
      heading: "Éxito!",
      text: "Conexión exitosa.",
      caption: "",
    },
    tabs: {
      itensPerPage: "Artículos por página",
    },
    home: {
      welcome: "¡Bienvenido a Assistant Curator!",
      cardHeader1: "Evaluación de la conversación",
      cardHeader2: "Conversación Rendimiento",
      cardHeader3: "Calidad de la formación",
      cardContent1:
        "Presenta la conversación entre el cliente y el asistente en el nivel de intercambio de mensajes para la evaluación humana de su asertividad asignando una puntuación (1 - 5).",
      cardContent2:
        "Proporciona una interfaz para crear y visualizar cuadros de mando interactivos, con IBM Cognos Dashboard, que muestran el rendimiento del asistente a lo largo del tiempo.",
      cardContent3:
        "Muestra gráficos basados en los datos de los experimentos realizados con las Intenciones y el árbol de conversación del Asistente.",
    },
    intentModal: {
      description:
        "Para mejorar tu Watson Assistant sigue los siguientes pasos.",
      step1: "Comprobar datos",
      step2: "Abra su Asistente",
      step3: "Edite sus intenciones",
      step4: "Dar una nota",
      step5: "Datos de la conversación",
      step6: "Experimentos de ejecución",
      step7: "Comprueba y repite",
      content1:
        "Vea los gráficos de entrenamiento de sus intentos para encontrar posibles confusiones en su Asistente. Estos gráficos se basan únicamente en la configuración de su Asistente.",
      content2:
        "Vaya a su instancia de Asistente y abra la página de intenciones de la Habilidad de Diálogo que desea cambiar.",
      content3:
        "Realice los cambios necesarios según los datos encontrados en el paso 1. Puede cambiar o eliminar los ejemplos de una intención con menos precisión.",
      content4:
        "Vá para a tela de Nota de Curadoria enriqueça os dados com uma nota humana para comparar com a confiança do Assistant. Para uma melhor análise, avalie pelo menos 50 mensagens.",
      content5:
        "Vea los gráficos de datos de las interacciones de su Asistente con sus usuarios para entender mejor cómo están interactuando sus usuarios con su Asistente y compruebe los posibles fallos en su árbol de conversación y sus intenciones.",
      content6:
        "Tras verificar los datos y realizar los cambios necesarios, ejecute de nuevo la función de experimentos para generar nuevas métricas.",
      content7:
        "Después de completar todos los pasos tendrás una nueva vista de tu Asistente. Siga el uso del Asistente y controle la necesidad de cambios repitiendo estos pasos.",
    },
  },
  en: {
    headerSwitcher: {
      save: "Save",
      upToDate: "Up to date",
      load: "Load",
    },
    infoTable: {
      sendButton: "Save Score",
      group: "Group",
    },
    accountSelectionModal: {
      heading: "Select the desired account",
      label: "Available accounts",
      primaryText: "Select",
      secondaryText: "Cancel",
      inputLabel1: "Accounts",
    },
    modal: {
      heading: "Db2 conection information",
      label: "Instance and Table to be consulted",
      primaryText: "Reload",
      secondaryText: "Save",
      selectAnOption: "Select an option",
      alert: "Please select one of the listed instances",
      inputLabel1: "Select the desired Db2 instance",
      inputLabel2: "Enter the title of the table to be queried",
    },
    cognosModal: {
      heading: "Cognos credentials",
      label: "Consulted Instances",
      primaryText: "Reload",
      secondaryText: "Save",
      tab1: "Cognos",
      tab2: "Cloudant",
      tab3: "Db2",
      tab4: "Tables",
      selectAnOption: "Select an option",
      alert: "Please select one of the listed instances",
      inputLabel1: "Select the desired Cognos instance",
      inputLabel2: "Select the desired Cloudant instance",
      inputLabel3: "Enter the desired Cloudant database",
      inputLabel4: "Select the desired Db2 instance",
      inputLabel5: "Enter the xsd module link",
      inputLabel6: "Enter the Jdbc driver",
      inputLabel7: "Logs table",
      inputLabel8: "Conversations table",
      inputLabel9: "Calls table",
      inputLabel10: "Context variables table",
      inputLabel11: "Conversation path table",
      inputLabel12: "Overview table",
      inputLabel13: "Class Distribution table",
      inputLabel14: "Precision @k table",
      inputLabel15: "Class accuracy table",
      inputLabel16: "Pair wise class errors table",
      inputLabel17: "Accuracy vs coverage table",
    },
    homeHelp: {
      heading: "Help",
      text: "On this homepage, select the action you want to take on the cards below. If you are not sure about the proposed steps, follow the modal available in the lower right corner.",
    },
    saveModal: {
      heading:
        "Enter the name you want to give the Dashboard. This will automatically be set as the default Dashboard",
      label: "Save Dashboard in Cloudant",
      primaryText: "Save",
      secondaryText: "Cancel",
      inputLabel1: "Dashboard name (ID)",
    },
    loadModal: {
      heading:
        "Enter the name of the Dashboard you want to search. This will automatically be set as the default Dashboard",
      label: "Search Dashboard in Cloudant",
      primaryText: "Search",
      secondaryText: "Cancel",
      inputLabel1: "Dashboard name (ID)",
    },
    modalHelp: {
      heading: "Help",
      text: "This table displays the exchange of messages between client and Assistant, highlighting what intent was understood by the assistant in the received message. With this information, the curator can assess the assistant's performance at the message level.",
    },
    cognosModalHelp: {
      heading: "Help",
      text: "This page displays an interactive dashboard that presents metrics to support the Assistant curation process.",
    },
    modalWarning: {
      heading: "Error!",
      text: "It was not possible to connect through the supplied data. Please check the information and try again.",
      caption: "",
    },
    standardDashboardModal: {
      heading: "Warning",
      text: "Initializing default Dashboard.",
      caption: "",
    },
    modalSuccess: {
      heading: "Success!",
      text: "Successfully connected.",
      caption: "",
    },
    tabs: {
      itensPerPage: "Items per page",
    },
    home: {
      welcome: "Welcome to Assistant Curator!",
      cardHeader1: "Conversation Evaluation",
      cardHeader2: "Conversation Performance",
      cardHeader3: "Intent Training Quality",
      cardContent1:
        "Presents the conversation between client and assistant at the message exchange level for human evaluation of its assertiveness by assigning a score (1 - 5).",
      cardContent2:
        "It provides an interface for building and viewing interactive dashboards, with IBM Cognos Dashboard, that show the Assistant's performance over time.",
      cardContent3:
        "Shows graphs based on data from Experiments performed using the Intentions and the Assistant's conversation tree.",
    },
    intentModal: {
      description: "To improve your Watson Assistant take the following steps.",
      step1: "Check data",
      step2: "Open your Assistant",
      step3: "Edit Intents",
      step4: "Give a note",
      step5: "Conversation Data",
      step6: "Run Experiments",
      step7: "Check and repeat",
      content1:
        "Look at the training graphs of your intents to find possible confusions in your Assisant. These graphs are based only on how your Assistant is configured.",
      content2:
        "Go to your Assistant instance and open the intents page of the Dialog Skill you want to change.",
      content3:
        "Make the necessary changes, according to the data found in step 1. You can change or remove the examples of an intent with less precision.",
      content4:
        "Go to the Curator Note screen enrich the data with a human note to compare with Assistant's confidence. For the best analysis, rate at least 50 messages.",
      content5:
        "View data graphs of your Assistant's interactions with your users to better understand how your users are interacting with your Assistant and check for possible flaws in your conversation tree and its intents.",
      content6:
        "After verifying the data and making any necessary changes, you run the experiment function again to generate new metrics.",
      content7:
        "After completing all steps you have a new view of your Assistant. Track the usage of the Assistant and monitor the need for changes by repeating these steps.",
    },
  },
};
