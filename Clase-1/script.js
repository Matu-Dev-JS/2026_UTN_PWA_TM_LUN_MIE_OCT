/* console.log("hola desde el servidor!")
console.log("Esto es backend?") */

//Con esto podemos manipular archivos en la PC
//fs es el modulo nativo de Node.js que permite manipular archivos
/* const filesystem = require('fs')

let contenido = filesystem.readFileSync(
    './test.txt', 
    {
        encoding: 'utf-8'
    }
)

console.log("El contenido del test.txt es: " + contenido) */


/* 
En JS existen 2 tipos de categorias de datos
PRIMITIVOS:
    - number
    - string
    - null
    - boolean
    - undefined

Complejos / Objeto:
    - Object
    - Array

JS depende de que categoria de dato lo va a manejar de forma distinta en memoria
Primitivos: JS asigna el valor del dato
Complejos: JS asigna la referencia del dato
*/


let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_2 = 'juan'

console.log(nombre_1)


/* const nombres_1 = ['pepe', 'juan']
const nombres_2 = nombres_1

nombres_2.push('jose')

console.log(nombres_1) */

/* 
const state = [1, 2, 3, [1]]
const cloned_state = [...state]

cloned_state[3].push('1')

console.log(state) */





const usuarios = [
    {
        _id: 1,
        name: 'pepe',
        email: 'pepe@gmail.com',
        role: {
            name: 'User',
            _id: 1
        },
        profile: {
            lang: 'es',
            isDark: true
        }
    },
    {
        _id: 2,
        name: 'juan',
        email: 'juan@gmail.com',
        role: {
            name: 'Admin',
            _id: 2
        },
        profile: {
            lang: 'en',
            isDark: false
        }
    }
]

/* 
Dado el array de usuarios desarrollar:

formatUsers(users)
    Debe devolver un array donde cada usuario tendra el siguiente formato:
        {
            user_id: ,
            user_name: ,
            user_email: ,
            role_name: ,
            role_id: ,
            profile_lang: ,
            profile_isDark
        }

getUserById(users, user_id)
    Debe devolver el usuario con ese user_id o null si no encuentra


formatUser(user) (nueva)
    - devolver el usuario formateado
    - podrian usarla en formatUsers para centralizar el formato
    {
        user_id: ,
        user_name: ,
        user_email: ,
        role_name: ,
        role_id: ,
        profile_lang: ,
        profile_isDark
    }
    
getUsersByRole(users, role_id) (nueva)
    - Devuelve la lista de usuarios con ese role_id en particular

deleteUserById(users, user_id) (nueva)
    - Elimina el usuario por id (devuelve true o false en base a si lo logro)
*/



function formatUsers(users) {
    const my_users = [];
    // Recorremos cada usuario con un bucle for...of
    for (const user of users) {
        my_users.push( formatUser(user) );
    }
    return my_users;
}


function getUserById(users, user_id) {
    for (const user of users) {
        if (user._id === user_id) {
            return user
        }
    }
    return null
}


console.log(getUserById(usuarios, 1))

function formatUser(user) {
    return {
        "user_id": user._id,
        "user_name": user.name,
        "user_email": user.email,
        "role_name": user.role.name,
        "role_id": user.role._id,
        "profile_lang": user.profile.lang,
        "profile_isDark": user.profile.isDark
    };
}
console.log(formatUser(usuarios[1]))