const questions = [
    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
            "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé",
    },
    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
            "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
            "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
        letter: "f",
        answer: "facil",
        status: 0,
        question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
            "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano",
    },
    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question:
            "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo",
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
    },
    {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
            "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
            "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
            "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question:
            "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
        letter: "y",
        answer: "peyote",
        status: 0,
        question:
            "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
        letter: "z",
        answer: "zen",
        status: 0,
        question:
            "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];

let countPoints = 0;
let wrongAsnwerCount = 0;
let username;

const askForUsername = () => {
    username = prompt('Hello! Welcome to Pasapalabra. Please, enter your name.'); // Programacion defensiva
    if (!username) {
        askForUsername();
    } else {
        console.log(`Hello ${username}`);
        alert(`Hi ${username.toLocaleLowerCase()}`)
    }
};
const getPoints = (correct) => {
    if (correct) {
        countPoints++;
    }
}

const hacerPregunta = (i) => {
    if (questions[i].status === 0) {
        const answer = prompt(`${questions[i].question}. \nWrite PASAPALABRA if you don't know it.`);
        if (answer.toLowerCase() === 'end') {
            return 'terminarJuego';
        } else if (answer.toLowerCase() === questions[i].answer) {
            questions[i].status = 1;
            getPoints(true);
            alert(`${questions[i].question}. \n${answer.toUpperCase()}: CORRECT!  You have ${countPoints} points.`)

        } else if (answer.toLowerCase() === 'pasapalabra') {
            //Pasa turno
        } else {
            questions[i].status = 1; //Respuesta fallada
            wrongAsnwerCount++;
            alert(`${questions[i].question}. \n${answer.toUpperCase()}: WRONG!\nCorrect answer: ${questions[i].answer.toUpperCase()}. You have ${countPoints} points.`)
        }
    }
}


const allLettersCompleted = () => {
    return questions.every(word => word.status === 1);
}

const nextTurn = () => confirm('Do you want keep playing?');

const saveRanking = () => {
    let ranking = {};
    ranking.user = username;
    ranking.point = countPoints;
    alert(`${ranking.user}-> ${ranking.point} points`)
}

let newHour;
let newMin;
let newSec;
let today;
const getTime = () => {
    today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

    let timer = 10; //130 segundos por turno
    timeLimitSeconds = sec + min * 60 + hour * 3600 + timer;
    newHour = Math.floor(timeLimitSeconds / 3600);
    newHour = (newHour >= 24) ? newHour % 24 : newHour;
    newHour = (newHour < 10) ? '0' + newHour : newHour;
    newMin = Math.floor((timeLimitSeconds / 60) % 60);
    newMin = (newMin < 10) ? '0' + newMin : newMin;
    newSec = timeLimitSeconds % 60;
    newSec = (newSec < 10) ? '0' + newSec : newSec;
}
const countdown = () => {
    today = new Date();
    if (today.getSeconds() >= newSec && today.getMinutes() >= newMin && today.getHours() >= newHour) {
        alert('HAS CONSUMIDO TODO EL TIEMPO. FIN DE LA PARTIDA');
        return 'tiempoacabado';
    }

}


const game = () => {
    askForUsername();
    getTime();
    let endGame = false;
    let i = 0;
    do {


        let finTiempo = countdown();
        if (finTiempo === 'tiempoacabado') {
            endGame = true;
            saveRanking();
        } else {
            let nomaspreguntas = hacerPregunta(i);
            if (nomaspreguntas !== 'terminarJuego') {
                if (allLettersCompleted()) {
                    alert(`Game Over!  You have ${countPoints} points.\n Failed words: ${wrongAsnwerCount}`)
                    endGame = true;
                    saveRanking();
                } else if (questions[i].status === 1) {
                    //Saltar turno porque la palabra ya esta acertada o no acertada de antes
                }
            } else {
                endGame = true;
                alert(`You turn off the game`)
            }

            if (i < questions.length - 1) {
                i++;
            } else {
                i = 0;
            }
        }

    } while (!endGame);

};

game();