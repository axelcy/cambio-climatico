export default [
    {
        id: 1,
        desc: "La contraseña debe tener al menos 8 caracteres",
        validar: (pass) => pass.length >= 8
    },
    {
        id: 2,
        desc: "La contraseña debe tener al menos un número",
        validar: (pass) => /\d/.test(pass)
    },
    {
        id: 3,
        desc: "La contraseña debe incluir este emoji: ♻️",
        validar: (pass) => /♻️/.test(pass)
    },
    {
        id: 4,
        desc: "Es obligatorio que contenga las 3R: Reciclar, reducir y reutilizar.",
        validar: (pass) => /^(.*[rR]){3}$/.test(pass) && !/(.*[rR]){4}/.test(pass)
    },   
    {
        id: 5,
        desc: "¿Cual de estas opciones contamina mas? 1)CO. 2)NO. 3)SO2.",
        validar: (pass) => /^(.*[rR]){3}$/.test(pass) && !/(.*[rR]){4}/.test(pass)
    },   
    {
        id: 6,
        desc: "Ingresa la mayor temperatura registrada en Argentina hasta el dia de la fecha",
        validar: (pass) => /49,1 /.test(pass)
    },
    {
        id: 7,
        desc: "¿Que pais sufrio mas del cambio climatico en toda la historia?",
        validar: (pass) => /CHAD/.test(pass)
    },
    {
        id: 8,
        desc: "Cuantos tachos de basura diferente nos podriamos encontrar?",
        validar: (pass) => /5/.test(pass)
    },
    {
        id: 9,
        desc: "Cuantos tachos de basura diferente nos podriamos encontrar?",
        validar: (pass) => /5/.test(pass)
    },
    {
        id: 10,
        desc: "",
        validar: (pass) => /5/.test(pass)
    },
]

/*
hacer preguntas con varias respuestas
ej: ¿qué contamina más?
A: asdasdsa
B: asddas
C: tSfsdfds
poner el resulado en la password
*/