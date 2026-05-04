


// const ph = {
//     id : 5,
//     number : 'afasdf'
// }

// typeof ph

// {
//     id : number 
//     number : string
// }





const UserRoles = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    SUPER: 'SUPER'
} as const;

// typeOf UserRoles 
// {
//     ADMIN : 'ADMIN',
//     USER : 'USER',
//     SUPER : 'SUPER'
// }



// keyof typeof UserRoles
// 'ADMIN' | 'USER' | 'SUPER'


const canEdit = (role: keyof typeof UserRoles) => {

    if (role === UserRoles.ADMIN) {
        return 'You can not edit'
    }
    else if (role === UserRoles.USER) {
        return 'Sorry you are user!'
    }
    else if (role === UserRoles.SUPER) {
        return "you are super admin"
    }
}

const ans = canEdit(UserRoles.USER)
console.log(ans)