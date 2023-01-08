
const URL_BASE = 'https://fmba-backend-gateway.herokuapp.com';

export const environment = {
  api: {
    login: URL_BASE + '/login',
    ordemServico: URL_BASE + '/api/ordem_servico',
    veiculo: URL_BASE + '/api/veiculo',
    cliente: URL_BASE + '/api/cliente'
  }
}
