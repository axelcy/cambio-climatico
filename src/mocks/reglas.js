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
        desc: 'Es obligatoria la inclusión de este emoji: ♻️',
        validar: (pass) => /♻️/.test(pass) || /♻/.test(pass)
    },
    {
        id: 4,
        desc: 'La contraseña debe contar con 3 "R".',
        ocultarTexto: true,
        opciones: 'Una solución al cambio climático es: Reciclar, reducir y reutilizar.',
        validar: (pass) => pass.length - pass.replace(/r/gi, '').length >= 3
    },   
    {
        id: 5,
        desc: '¿Cual de estas opciones contamina mas?',
        opciones: 'CO / Na / CaCl2',
        validar: (pass) => /CO/.test(pass),
    },   
    {
        id: 6,
        desc: 'Ingresá la mayor temperatura registrada en Argentina hasta el momento.',
        validar: (pass) => /49/.test(pass)
    },
    {
        id: 7,
        desc: '¿Cuál es el país más vulnerable al cambio climatico?',
        validar: (pass) => /Chad/i.test(pass)
    },
    {
        id: 8,
        desc: '¿De qué color es el tacho de "Plásticos y metales"?',
        img: 'regla_8.jpg',
        validar: (pass) => /amarillo/i.test(pass)
    },
    {
        id: 9,
        desc: 'El cambio climático está presente desde la Revolución . . . ',
        opciones: 'Francesa / Industrial / Rusa',
        validar: (pass) => /industrial/i.test(pass)
    },
    {
        id: 10,
        desc: '¿Qué derretimiento preocupa en los polos?',
        opciones: 'Nieve / Glaciares / Hielo',
        validar: (pass) => /Glaciares/i.test(pass)
    },
    {
        id: 11,
        desc: '¿En qué mes cae el día internacional del medio ambiente?',
        img: 'regla_11.jpg',
        validar: (pass) => /Octubre/i.test(pass)
    },
    {
        id: 12,
        desc: '¿Qué medida reduce la huella de carbono?',
        opciones: 'Reciclaje / Transporte público / Plásticos desechables',
        validar: (pass) => /Reciclaje/i.test(pass)
    },
]