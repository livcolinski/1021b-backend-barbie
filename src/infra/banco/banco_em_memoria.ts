import FilmeRepositorioInterface from "../../aplicacao/filme_repositorio_interface"
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
export default class BancoEmMemoria implements FilmeRepositorioInterface{
    public filmes:Filme[] = []
    constructor(){

    }
    public salvar(filme:Filme){
        return new Promise<Filme[]>((resolve, reject) => {
        resolve(this.filmes)
        })
    }
    public listar(){
        return new Promise<Filme[]>((resolve, reject) => {
            resolve(this.filmes)
            })
    }
    public buscarPorId(id:number){
         return new Promise<Filme|undefined[]>((resolve, reject) => {
        resolve(this.filmes.find(filme => filme.id ===id))
        })
    }
    public apagarDados(){
        return new Promise<Filme[]>((resolve, reject) => {
            resolve(this.filmes)
            })
    }
}
