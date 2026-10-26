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
/* 
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
} */

//Quiero crear un usuario
//Si queremos instanciar la clase User debemos usar la palabra new
//new class() invoca a la funcion constructora
/* const usuario_1 = new User('pepe', 'pepe@gmail.com', 1)

console.log(usuario_1) */



/* 
La clase = molde
Objeto =  resultado de usar usar el molde y crear algo
Instancia = el momento donde se usa el molde 
this = en contexto de la funcion constructora es una referencia a la instancia que se esta creando
*/

/* 
Crear la clase Product que tenga las propiedades
id
title
description
stock
price
discount -> siempre inicia en 0

Crear 3 productos
*/


/* 
Agregar propiedades:
    - seniority: 'entry' | 'junior' | 'mid' | 'senior'
    - puesto

Definir los metodos en la clase empleado:
    - aumentarSueldo(porcentaje_aumento) Aumenta el salario por ese porcentaje
    - aumentarSeniority () 
        - Segun el seniority actual debe subir una categoria mas 'entry' => 'junior' => 'mid' => 'senior'. 
        - Si es senior se queda como esta.

*/


type Seniority = 'entry' | 'junior' | 'mid' | 'senior' | 'mid-senior'
const seniorities = [
    {
        seniority_label: 'entry',
        increase_percentage : 0
    },
    {
        seniority_label: 'junior',
        increase_percentage: 5
    },
    {
        seniority_label: 'mid',
        increase_percentage: 10
    },
    {
        seniority_label: 'mid-senior',
        increase_percentage: 20
    },
    {
        seniority_label: 'senior',
        increase_percentage: 50
    },
]

/* 
aumentarSeniority()
    Aumentar tu seniority actual (salvo que seas senior, ahi se hace nada)
    Aumentar tu salario por el por el porcentaje de aumento del seniority definido en el array seniorities
*/

class Empleado {
    nombre: string
    id: number
    email: string
    dinero: number
    salario: number
    seniority: Seniority
    puesto: string
    constructor(nombre: string, email: string, id: number, salario: number, seniority: Seniority, puesto: string) {
        this.nombre = nombre
        this.email = email
        this.id = id
        this.salario = salario
        this.dinero = 0
        this.seniority = seniority
        this.puesto = puesto
    }

    cobrar(): void {
        this.dinero = this.dinero + this.salario
    }

    saludar(): string {
        return 'Hola a todos, mi nombre es ' + this.nombre + '!'
    }

    cambiarEmail(nuevo_mail: string): void {
        this.email = nuevo_mail
        this.aumentarSueldo(100)
    }

    aumentarSueldo(porcentaje_aumento: number): void {
        let aumento: number = this.salario * (porcentaje_aumento / 100)
        this.salario = this.salario + aumento
    }

   /*  aumentarSeniority(): void{
        const indiceSeniorityActual = seniorities.indexOf(this.seniority)

        if (indiceSeniorityActual === seniorities.length - 1) {
            return
        }
        this.seniority = seniorities[indiceSeniorityActual + 1]
    } */
    
}




/* class Product {
    id: number
    title: string
    description: string
    stock: number
    price: number
    discount: number
    constructor(id: number, title: string, description: string, stock: number, price: number) {
        this.id = id
        this.title = title
        this.description = description
        this.stock = stock
        this.price = price
        this.discount = 0
    }
}


const producto_1 = new Product(1, 'Tv Samsung 50"', "Televisión Samsung de 50 pulgadas", 20, 150000) */
/* console.log(producto_1) */



const empleado_1 = new Empleado('pepe', 'pepe@gmail.com', 1, 5000, 'entry', 'Programador front-end')

empleado_1.cobrar()
empleado_1.cobrar()
empleado_1.cambiarEmail('jose@gmail.com')
empleado_1.aumentarSueldo(10)
/* empleado_1.aumentarSeniority() */

console.log(empleado_1)
console.log(empleado_1.saludar())