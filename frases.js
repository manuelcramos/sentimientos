const frases = {
  triste: [
    "Incluso en la noche más oscura, el sol volverá a brillar.",
    "Permítete sentir, pero no pierdas la esperanza.",
    "Tus lágrimas riegan el terreno para tu crecimiento.",
    "Ser fuerte no es no llorar, es seguir adelante.",
    "Lo estás haciendo lo mejor que puedes, y eso es suficiente.",
    "El dolor también es parte del camino hacia la sanación.",
    "Hoy puede doler, pero mañana tendrás más fuerza.",
    "Las tormentas también hacen crecer flores.",
    "Está bien no estar bien.",
    "Después de la lluvia, siempre vuelve el sol."
  ],
  estresado: [
    "Respira. Estás haciendo lo mejor que puedes.",
    "Una mente tranquila ve soluciones, no problemas.",
    "Hoy puede ser difícil, pero no será así siempre.",
    "Tu paz mental es una prioridad, cuídala.",
    "No tienes que controlarlo todo.",
    "Haz una pausa, lo estás haciendo bien.",
    "La presión es parte del crecimiento, pero no lo es todo.",
    "Escucha a tu cuerpo, a veces solo necesita un respiro.",
    "No eres tu productividad.",
    "Un día a la vez, y todo estará bien."
  ],
  feliz: [
    "Disfruta este momento. Te lo mereces.",
    "Tu alegría ilumina a quienes te rodean.",
    "Sigue sonriendo, estás brillando con fuerza.",
    "La felicidad que das, vuelve multiplicada.",
    "Agradece cada instante de luz.",
    "Tu sonrisa es poderosa.",
    "Lo que te hace feliz, hazlo más seguido.",
    "Celebra tus logros, grandes o pequeños.",
    "Comparte tu felicidad, es contagiosa.",
    "Hoy es un buen día para ser feliz."
  ],
  cansado: [
    "Descansar también es parte del proceso.",
    "Incluso los más fuertes necesitan una pausa.",
    "No te castigues por descansar, te lo has ganado.",
    "Recargar energía es avanzar con más fuerza.",
    "Escucha a tu cuerpo: descansar también es crecer.",
    "Tu valor no se mide por lo que haces sin parar.",
    "Detente, respira, y vuelve con más claridad.",
    "Está bien soltar lo que pesa.",
    "A veces avanzar es simplemente no rendirse.",
    "Dormir es parte del éxito también."
  ],
  motivado: [
    "Sigue adelante, estás más cerca de lo que crees.",
    "El esfuerzo de hoy será tu éxito mañana.",
    "Cuando crees en ti, todo es posible.",
    "Tú puedes con todo lo que venga.",
    "No pares, cada paso cuenta.",
    "Eres capaz de más de lo que imaginas.",
    "La constancia te hará invencible.",
    "Ve por ello. Tienes lo necesario.",
    "No te detengas ahora, el cambio está cerca.",
    "Tu futuro está construido por lo que hagas hoy."
  ],
  duelo: [
    "Es normal sentir dolor, pero no estás solo.",
    "El amor nunca muere, vive en tu corazón.",
    "Recuerda con cariño, honra su vida con la tuya.",
    "Permítete llorar, sanar y recordar con amor.",
    "Tu ser querido siempre estará contigo en tus recuerdos.",
    "El duelo no tiene tiempo, solo amor que sigue vivo.",
    "No es olvido, es aprender a vivir distinto.",
    "Llorar también es una forma de amar.",
    "Cada lágrima honra lo que significó esa persona.",
    "Sigue caminando, con su memoria como guía."
  ],
  estudiar: [
    "Cada minuto que estudias, te acerca a tus sueños.",
    "No estudias para aprobar, estudias para superarte.",
    "Tu futuro yo te agradecerá el esfuerzo de hoy.",
    "El conocimiento es poder, y tú lo estás conquistando.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Estudiar no es solo para aprobar, es para construir tu futuro.",
    "No sueñes con el éxito, trabaja para conseguirlo.",
    "Cada hora de estudio es una inversión en ti mismo.",
    "El conocimiento es el único tesoro que nadie puede quitarte.",
    "La disciplina hoy, es libertad mañana."
  ],
  trabajo: [
    "No todos los días serán perfectos, pero cada paso cuenta.",
    "Hoy puede que no tengas ganas, pero avanzar un poco ya es victoria.",
    "No lo hagas por motivación, hazlo por disciplina.",
    "A veces solo hay que empezar. El ánimo llega en el camino.",
    "Está bien no estar al 100%. Lo importante es seguir.",
    "Tu esfuerzo diario construye tu camino.",
    "Incluso un día difícil te acerca a tu meta.",
    "No subestimes lo que logras con constancia.",
    "Trabajas por tu presente y tu futuro.",
    "Hazlo por ti, por lo que mereces."
  ],
  emociones: [
    "Tus emociones son válidas.",
    "La tormenta pasará, siempre lo hace.",
    "Cada emoción es una señal.",
    "No hay emociones buenas o malas, solo humanas.",
    "Sentir es vivir plenamente.",
    "Escucha lo que tus emociones quieren decirte.",
    "Abrázate cuando lo necesites.",
    "No estás roto por sentir mucho.",
    "Tu sensibilidad es tu fuerza.",
    "Permítete sentir sin culpa."
  ],
  estudios: [
    "El esfuerzo de hoy es el éxito de mañana.",
    "Estás más cerca de tu meta.",
    "Paso a paso se logra todo.",
    "No te rindas, estás construyendo tu futuro.",
    "Aprender cuesta, pero vale la pena.",
    "Cada estudio es una inversión en ti.",
    "Lo que aprendes hoy te abrirá puertas mañana.",
    "No importa cuánto tardes, lo importante es no parar.",
    "El camino se hace estudiando, no soñando.",
    "Tu mejor arma es el conocimiento."
  ],
  relaciones: [
    "Rodéate de quienes suman luz.",
    "Las conexiones sinceras curan.",
    "Cuida de quien te cuida.",
    "El amor también se aprende y se cultiva.",
    "Mereces relaciones sanas y recíprocas.",
    "Escuchar es una forma de amar.",
    "No estás solo, hay quienes te valoran.",
    "Tú también mereces atención y respeto.",
    "Una buena amistad vale más que mil palabras.",
    "Las relaciones se construyen con tiempo y empatía."
  ],
  crecimiento_personal: [
    "Cada reto te hace más fuerte.",
    "Tu mejor versión está en camino.",
    "No estás estancado, estás tomando impulso.",
    "El cambio comienza contigo.",
    "Nunca es tarde para reinventarte.",
    "Cree en ti, incluso cuando nadie más lo haga.",
    "Sal de tu zona de confort, ahí pasa la magia.",
    "Tu progreso es más importante que la perfección.",
    "Confía en el proceso, estás avanzando.",
    "La evolución personal no es lineal, es única."
  ],
  deporte: [
    "El cuerpo logra lo que la mente cree.",
    "Hazlo por ti, por tu salud, por tu fuerza.",
    "Aunque no tengas ganas, 5 minutos pueden cambiar tu día.",
    "El esfuerzo de hoy es el orgullo de mañana.",
    "Moverte es amarte. ¡Hazlo aunque sea poco!",
    "El sudor de hoy es la sonrisa de mañana.",
    "Nadie empieza siendo experto. Solo empieza.",
    "Entrenar es una forma de cuidarte.",
    "La constancia es más fuerte que la motivación.",
    "Cada movimiento te lleva a un tú más fuerte."
  ]
  huesoAncho: [
    "Tu cuerpo es una fortaleza, no una disculpa.",
    "El valor no tiene talla.",
    "Eres digno/a exactamente como eres.",
    "La belleza real no cabe en una etiqueta.",
    "No necesitas encajar en moldes ajenos.",
    "Tu fuerza interna es lo que realmente importa.",
    "Estás diseñado/a para destacar, no para encajar.",
    "Eres una obra de arte única e irrepetible.",
    "Camina con seguridad, tu presencia impacta.",
    "Tu cuerpo es tu hogar, ámalo sin condiciones."
  ],  // <-- coma al final de este array, muy importante
  
  deprimido: [
    "Aunque hoy parezca gris, el sol siempre vuelve.",
    "Tu existencia ya tiene valor por sí sola.",
    "Respira. Sobrevivir también es una victoria.",
    "Estás haciendo lo mejor que puedes, y eso basta.",
    "El dolor no te define, te transforma.",
    "Incluso el árbol más fuerte empezó como semilla.",
    "No estás solo/a, y eso ya es esperanza.",
    "Tus emociones son válidas, no te castigues por sentir.",
    "Cada día que te levantas es un acto de valentía.",
    "Permítete sanar a tu ritmo, sin prisa ni culpa."
  ]
  
};

