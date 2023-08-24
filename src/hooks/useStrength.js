import useRules from "./useRules"

export default (password) => Math.round(useRules(password).filter(regla => regla.valida).length / useRules(password).length * 100)