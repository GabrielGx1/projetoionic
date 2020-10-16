export class Cliente {
    id: string;
    telefone: string;
    email: string;
    cpf: string;
    endereco: string;
    numero: string;
    nome: string;
    estado: string;
    cidade: string;

    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.numero = objFirebase.cpf;
        this.endereco = objFirebase.email;
        this.email = objFirebase.endereco;
        this.estado = objFirebase.estado;
        this.nome = objFirebase.nome;
        this.cpf = objFirebase.numero;
        this.telefone = objFirebase.telefone;
    }
}