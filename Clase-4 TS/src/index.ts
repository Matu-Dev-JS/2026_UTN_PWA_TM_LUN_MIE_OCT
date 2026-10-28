class User {
    id: number
    name: string
    email: string
    constructor(id: number, name: string, email: string) {
        this.id = id
        this.name = name
        this.email = email
    }
}



//Con esta clase generamos un objeto que maneje la lista de usuarios
class UsersManager {
    users: User[]
    id_counter: number
    constructor() {
        this.id_counter = 0
        this.users = []
    }

    //Creamos un metodo que permite agregar un usuario a la lista de usuarios
    create(name: string, email: string): void {
        const new_user = new User(this.id_counter, name, email)
        this.id_counter = this.id_counter + 1
        this.users.push(new_user)
    }
}

/* const userManager = new UsersManager()

console.log(userManager)

userManager.create('pepe', 'pepe@gmail.com')
userManager.create('maria', 'maria@gmail.com')

console.log(userManager) */


/* 
Crear la clase Product:
    - id
    - title
    - price
    - percentage_discount
    - description
    - stock
    - categories string[] EJ: ['tecnologia', 'hogar']

Crear la clase ProductManager:
    - products: Product[]
    - id_counter: number = 0

    METODOS: 
        - create(title, price, percentage_discount, description, stock, categories)
            devuelve el id del producto creado
        
        - getById(product_id)
            devuelve el producto buscado por id o null si no existe
*/

class Product {
    id: number
    title: string
    price: number
    percentage_discount: number
    description: string
    stock: number
    categories: string[]
    constructor(
        id: number,
        title: string,
        price: number,
        percentage_discount: number,
        description: string,
        stock: number,
        categories: string[]
    ) {
        this.id = id
        this.title = title
        this.price = price
        this.percentage_discount = percentage_discount
        this.description = description
        this.stock = stock
        this.categories = categories
    }
}

class ProductManager {
    products: Product[]
    id_counter: number
    constructor() {
        this.id_counter = 0
        this.products = []
    }

    create(
        title: string,
        price: number,
        percentage_discount: number,
        description: string,
        stock: number,
        categories: string[]
    ): number {
        const new_product = new Product(
            this.id_counter,
            title,
            price,
            percentage_discount,
            description,
            stock,
            categories
        )
        this.id_counter = this.id_counter + 1
        this.products.push(new_product)
        return new_product.id
    }

    getById(product_id: number): Product | null {
        for(const product of this.products){
            if(product.id === product_id){
                return product;
            }
        }
        return null
    }
}

const productManager = new ProductManager()
const new_product_id = productManager.create(
    'tv samsung',
    5000,
    10,
    'tv muy buena',
    40,
    ['electro']
)
console.log(new_product_id)