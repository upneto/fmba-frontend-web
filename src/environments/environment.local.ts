
const URL_BASE = 'http://localhost:9080';

export const environment = {
  production: false,
  base: URL_BASE,
  api: {
    login: URL_BASE + '/login',
    ordemServico: URL_BASE + '/api/ordem_servico',
    veiculo: URL_BASE + '/api/veiculo',
    cliente: URL_BASE + '/api/cliente'
  }
}
