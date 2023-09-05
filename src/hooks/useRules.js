import reglasMock from '../mocks/reglas'

export default (password) => reglasMock.map((regla, index) => ({...regla, valida: regla.validar(password), id: index + 1}))