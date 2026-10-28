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

    Metodo:
        agregarCategoria(nueva_categoria) (hecho)
            agrega la categoria, si no existe previamente
            devuelve boolean indicando si la operacion se pudo hacer o no
        
        eliminarCategoria(categoria) (nuevo)
            eliminar en caso de que exista
            devuelve boolean indicando si la operacion se pudo hacer o no

Crear la clase ProductManager:
    - products: Product[]
    - id_counter: number = 0

    METODOS: 
        - create(title, price, percentage_discount, description, stock, categories)
            devuelve el id del producto creado
        
        - getById(product_id)
            devuelve el producto buscado por id o null si no existe

        - filtrarPorCategoria(categorias_filtradas) (nuevo)
            Recibe un array de categorias y debe devolver a los productos que tengan esas categorias
            Protip: recuerden que con .includes pueden saber si cierto elemento esta en otro array
            const nombres = ['pepe', 'juan', 'maria']
            console.log(nombres.includes('juan'))//true
            console.log(nombres.includes('juanito'))//false

            productManager.filtrarPorCategoria(['electro', 'navidad'])
                Devolver a los productos que tengan la categoria electro Y navidad


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

    addCategory(new_category: string): boolean{
        const already_exist_category = this.categories.includes(new_category)
        if(already_exist_category){
            return false
        }
        this.categories.push(new_category)
        return true
    }

    deleteCategory( category: string ): boolean{
        const already_exist_category = this.categories.includes(category)
        if(already_exist_category){
            const index_category = this.categories.indexOf(category)
            this.categories.splice(index_category, 1)
            return true
        }
        return false
    }
}


const producto_test = new Product(1, 'test', 200, 10, 'test', 20, ['electro', 'hogar'])
producto_test.addCategory('electro')
producto_test.deleteCategory('test')

console.log(producto_test)

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

    filterByCategories(categories_to_filter: string[]): Product[]{
        const products_filtered: Product[] = []

        for(const product of this.products){
            let valid_product = true
            for(const category of categories_to_filter){
                if(! toLowerCaseAll(product.categories).includes(category.toLowerCase()) ){
                    valid_product = false
                    break
                }
            }
            if(valid_product){
                products_filtered.push(product)
            }
        }

        return products_filtered
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
productManager.create(
    'tv samsung 2',
    5000,
    10,
    'tv muy buena',
    40,
    ['navidad']
)

productManager.create(
    'tv samsung 3',
    5000,
    10,
    'tv muy buena',
    40,
    ['navidad', 'electro']
)



/* const nombres = ['pepe', 'juan', 'maria']

console.log(nombres.includes('juanito')) */

/* 
Primero crear una lista vacia de resultados

Recorrer la lista de productos
    Por cada producto recorrer la lista de categorias filtradas
        Por cada categoria checkear si esa categoria esta incluida en las categorias del producto
            Si esto es verdadero sumar producto a la lista vacia de resultados

Por cada categoria de las categorias
    categoria.toLowerCase()
    sumar resultado a un array

*/

function toLowerCaseAll(strings: string[]): string[]{
    const stringsLowerCase = []
    for(let string of strings){
        stringsLowerCase.push(string.toLowerCase())
    }
    return stringsLowerCase
}

console.log(productManager.filterByCategories(['electro', 'navidad']))