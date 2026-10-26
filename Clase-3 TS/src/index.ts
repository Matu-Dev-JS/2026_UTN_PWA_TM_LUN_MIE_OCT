/* 
Paradigma de programacion
POO: Programacion Orientada a objetos
Todos los problemas en nuestro codigo los vamos a resolver a partir de los objetos de nuestro codigo
Para crear objetos usaremos "moldes"/"platillas" llamadas clases
*/

//Objeto literal
/* 
const user_1 = {
    name: 'pepe',
    id: 1,
    email: 'pepe@gmail.com'
}

const user_2 = {
    name: 'julieta',
    id: 2,
    email: 'julieta@gmail.com'
} 
*/

class User {
    name: string
    id: number
    email: string
    dinero: number
    constructor(name: string, email: string, id: number){
        this.name = name
        this.email = email
        this.id = id
        this.dinero = 0
    }
}

//Quiero crear un usuario
//Si queremos instanciar la clase User debemos usar la palabra new
//new class() invoca a la funcion constructora
const usuario_1 = new User('pepe', 'pepe@gmail.com', 1)

console.log(usuario_1)



/* 
La clase = molde
Objeto =  resultado de usar usar el molde y crear algo
Instancia = el momento donde se usa el molde 
this = en contexto de la funcion constructora es una referencia a la instancia que se esta creando
*/