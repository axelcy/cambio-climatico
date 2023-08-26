// patter.test(string) => true | false
// string.match(pattern) => null | array
// Contraseña ganadora:
// ChadAmarillo49♻COrrr
export default [
    {
        id: 1,
        desc: 'La contraseña debe tener al menos 8 caracteres',
        validar: (pass) => pass.length >= 8
    },
    {
        id: 2,
        desc: 'La contraseña debe tener al menos un número',
        validar: (pass) => /\d/.test(pass)
    },
    {
        id: 3,
        desc: 'La contraseña debe incluir este emoji: ♻️',
        validar: (pass) => /♻️/.test(pass) || /♻/.test(pass)
    },
    {
        id: 4,
        desc: 'Es obligatorio que contenga 3 "R".',
        opciones: 'Reciclar, reducir y reutilizar.',
        validar: (pass) => pass.length - pass.replace(/r/gi, '').length === 3
    },   
    {
        id: 5,
        desc: '¿Cual de estas opciones contamina mas?',
        opciones: 'CO / Na / CaCl2',
        validar: (pass) => /CO/.test(pass),
    },   
    {
        id: 6,
        desc: 'Ingresá la mayor temperatura registrada en Argentina hasta el momento',
        validar: (pass) => /49/.test(pass)
    },
    {
        id: 7,
        desc: '¿Cuál es el país más vulnerable al cambio climatico?',
        validar: (pass) => /chad/i.test(pass)
    },
    {
        id: 8,
        desc: '¿De qué color es el tacho de "Plásticos y metales"?',
        img: 'regla_8.jpg',
        validar: (pass) => /amarillo/i.test(pass)
    },
    {
        id: 9,
        desc: 'El cambio climático está presente desde la Revolución industrial.',
        opciones: 'Verdadero / Falso',
        validar: (pass) => /Verdadero/i.test(pass)
    },
]