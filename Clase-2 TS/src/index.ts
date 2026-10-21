let edad: number
let nombre: string
let esAdmin: boolean
let llegoMensaje: boolean | null
let role: 'admin' | 'user' | 'owner' = 'user'


//type nos permite definir tipos de datos custom
type Role = 'admin' | 'user' | 'owner'

let userRole: Role = 'user'

//void hace referencia a que la funcion NO tiene retorno, o que su retorno no es importante
function saludar(nombre: string): void {
    console.log('Hola ' + nombre + '!')
}

//saludar('pepe')

function sumar(a: number, b: number): number {
    return a + b
}

//console.log(sumar(1, 1))

//Declaro el tipado de un objeto literal
/* 
const usuario: {
    nombre: string,
    email: string,
    id: number
} = {
    nombre: 'pepe',
    email: 'pepe@gmail.com',
    id: 1
} */

//Esto mismo se puede hacer de forma mas practica con las Interfaces
interface User {
    nombre: string,
    email: string,
    id: number
}

let usuario: User = {
    nombre: 'pepe',
    email: 'pepe@gmail.com',
    id: 2
}

let usuario_2: User = {
    nombre: 'juan',
    email: 'juan@gmail.com',
    id: 22
}

//arrays
let nombres: string[] = ['pepe', 'juan', 'jose']
let notas: number[] = [1, 2, 3]
let usuario_en_array: [string, number] = ['pepe', 50]
const usuarios: User[] = [
    { nombre: 'pepe', email: 'pepe@gmail.com', id: 10 },
    { nombre: 'jose', email: 'jose@gmail.com', id: 41 },
    { nombre: 'maria', email: 'maria@gmail.com', id: 40 }
]

usuarios.push({ nombre: 'jose', email: 'jose@gmail.com', id: 44 })



/* 
Crear la funcion:
    calcularIva(400)
        Va a devolver un objeto con el sig formato
            {
                iva: valor_del_iva,
                precio_final: precio_original + iva,
                precio_original: precio_original,
                porcentaje_iva: (por ejemplo 21)
            }
        Pro tip: pueden usar una interface para definir el tipo de devolucion de la funcion
    

    Dada una lista de usuarios: (pueden usar la lista de usuarios declarada en el codigo)
        interface User {
            nombre: string,
            email: string,
            id: number
        }
        const usuarios: User[] = [
            {nombre: 'pepe', email: 'pepe@gmail.com', id: 10}, 
            {nombre: 'jose', email: 'jose@gmail.com', id: 41}, 
            {nombre: 'maria', email: 'maria@gmail.com', id: 40}
        ]
        Crear la funcion obtenerMails(usuarios) y debe devolver una lista con cada mail del usuario
*/

let porcentaje_iva: number = 21
interface Result {
    iva: number,
    precio_final: number,
    precio_original: number,
    porcentaje_iva: number
}
function calcularIva(precio_original: number): Result {
    const iva = (precio_original * porcentaje_iva) / 100;
    const precio_final = precio_original + iva
    return {
        iva,
        precio_final,
        precio_original,
        porcentaje_iva,
    }
}

console.log(calcularIva(100))

