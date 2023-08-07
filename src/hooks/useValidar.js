const useValidar = (password, reglas) => {
    reglas.forEach(r => r.valida = false)
    
    // "La contraseña debe tener al menos 8 caracteres"
    if (password.length >= 8) reglas[0].valida = true
    // "La contraseña debe tener al menos un número"
    if(/\d/.test(password)) reglas[1].valida = true
    // "La contraseña debe incluir este emoji: ♻️"
    if (/♻️/.test(password)) reglas[2].valida = true
    // "Es obligatorio que contenga las 3R: Reciclar, reducir y reutilizar"
    if (/^(.*[rR]){3}$/.test(password) && !/(.*[rR]){4}/.test(password)) reglas[3].valida = true

    return reglas
}

export default useValidar