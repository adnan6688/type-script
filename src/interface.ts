


type User = {
    name: string
}

type Role = {
    role: 'admin' | 'user'
}
type userWithRole = User & Role // intersection type



const user1: userWithRole = {
    name: 'Habibi',
    role: 'user'
}


interface StudentType extends User {
    id: string
}

const newStudnet: StudentType = {
    id: 'asfsf',
    name: 'Adnan'
}


type isAdminType = boolean

const isAdmin: isAdminType = true


// interface kaj korbe object array ai type ar khetre



type TypeAdd = (num1: number, num2: number) => number

interface IAdd {
    (num1: number, num2: number): number
}


const add: IAdd = (num1, num2) => num1 + num2




type IFriends = string[]


interface InterFceFriends {
    [index: number]: string
}



const friends: InterFceFriends = ['A', 'B', 'C']

