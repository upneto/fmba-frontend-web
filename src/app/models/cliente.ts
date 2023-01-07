export class Cliente {
	id: number = 0;
	dataCriacao: Date = new Date();;
	informacao: string = '';
	nome: string = '';
  nomeRazaoSocial: string = '';
  tipoPessoa: number = 0;
	contatos: any = [];
	enderecos: any = [];
}
