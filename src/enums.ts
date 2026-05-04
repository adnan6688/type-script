

// set of fixed string leteral ak jaigai rakhe

enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    SUPERADMIN = 'SUPERADMIN'
} 


const canEdit = (role: Role) => {

   if (role === Role.ADMIN) {
        return 'You can not edit'
    }
    else if (role === Role.USER) {
        return 'Sorry you are user!'
    }
    else if (role === Role.SUPERADMIN) {
        return "you are super admin"
    }
}

const ans = canEdit(Role.USER)
console.log(ans)