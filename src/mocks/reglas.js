// patter.test(string) => true | false
// string.match(pattern) => null | array
// asdasdas1♻rrrCO49chadamarilloindustrialglaciaresoctubrereciclajeselvaradiacradiacionmarextincion
export default [
    {
        titulo: 'La contraseña debe tener al menos 8 caracteres',
        validar: (pass) => pass.length >= 8
    },
    {
        titulo: 'La contraseña debe tener al menos un número',
        validar: (pass) => /\d/.test(pass)
    },
    {
        titulo: 'Es obligatoria la inclusión de este emoji: ♻️',
        validar: (pass) => /♻️/.test(pass) || /♻/.test(pass)
    },
    {
        titulo: 'La contraseña debe contar con 3 "R".',
        texto: null,
        subtitulo: 'Una solución al cambio climático es: Reciclar, reducir y reutilizar.',
        validar: (pass) => pass.length - pass.replace(/r/gi, '').length >= 3
    },   
    {
        titulo: '¿Cual de estas opciones contamina mas?',
        subtitulo: 'CO / Na / CaCl2',
        validar: (pass) => /CO/.test(pass),
    },   
    {
        titulo: 'Ingresá la mayor temperatura registrada en Argentina hasta el momento.',
        validar: (pass) => /49/.test(pass)
    },
    {
        titulo: '¿Cuál es el país más vulnerable al cambio climatico?',
        validar: (pass) => /Chad/i.test(pass)
    },
    {
        titulo: '¿De qué color es el tacho de "Plásticos y metales"?',
        img: 'regla_8.jpg',
        validar: (pass) => /amarillo/i.test(pass)
    },
    {
        titulo: 'El cambio climático está presente desde la Revolución . . . ',
        subtitulo: 'Francesa / Industrial / Rusa',
        validar: (pass) => /industrial/i.test(pass)
    },
    {
        titulo: '¿Qué derretimiento preocupa en los polos?',
        subtitulo: 'Nieve / Glaciares / Hielo',
        validar: (pass) => /Glaciares/i.test(pass)
    },
    {
        titulo: 'Hace falta que contenga el MES del día internacional del medio ambiente.',
        img: 'regla_11.jpg',
        validar: (pass) => /Octubre/i.test(pass)
    },
    {
        titulo: 'La contraseña debe incluir una medida para reducir la huella de carbono.',
        subtitulo: 'Reciclaje / Transporte público / Plásticos desechables',
        validar: (pass) => /Reciclaje/i.test(pass)
    },
    {
        titulo: 'La contraseña debe incluir el ecositema más biodiverso del mundo.',
        subtitulo: 'Selva / Desierto / Oceano',
        validar: (pass) => /Selva/i.test(pass)
    },
    {
        titulo: '¿De que nos protege la capa de Ozono?',
        subtitulo: 'Radiacion / El calor / El sol',
        validar: (pass) => /Radiacion/i.test(pass)
    },
    {
        titulo: 'Perdida de especies de animales, recursos y vegetales',
        texto: 'Corresponde a la definición de:',
        subtitulo: 'Contaminacion / Deforestacion / Extincion',
        validar: (pass) => /Extincion/i.test(pass)
    }
]