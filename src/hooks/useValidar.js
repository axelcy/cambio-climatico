const useValidar = (password, reglas) => {
    // "La contraseña debe tener al menos 8 caracteres"
    if (password.lenght >= 8) reglas[0].valida = true
    // "La contraseña debe tener al menos un número"
    // if(password.test(/\d/)) newReglas[1].valida = true

    return reglas
}

export default useValidar