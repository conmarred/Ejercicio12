export class Videojuego{

    //Los videojuegos tendran un identificador, un titulo, una compañia, un icono/imagen y una valoración media.

    constructor(public id: number,public titulo : string, public company : string, public imagen : string, public valoracion : number){
        this.id = id;
        this.titulo = titulo
        this.company = company
        this.imagen = imagen
        this.valoracion = valoracion
    }

    

    public toString() : string {
        return `Id: ${this.id}, Titulo: ${this.titulo}, Compania: ${this.company}, Imagen: ${this.imagen}, Valoracion media: ${this.valoracion}`
    }


}