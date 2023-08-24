import reglasMock from '../mocks/reglas'

export default (password) => reglasMock.map(regla => ({...regla, valida: regla.validar(password)}))