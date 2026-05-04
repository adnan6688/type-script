

type GenericArray<T> = Array<T>


// const friends : string[] = ['a','b','c','d']
const friends: GenericArray<string> = ['a', 'b', 'b']



// const rollNumber: number[] = [1, 2, 5, 7, 8]
const rollNumber: GenericArray<number> = [5, 6, 7, 8, 9]


// const isEligibleList: boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true]





type Coordinates<L,R> = [L,R]

const coordinates:Coordinates<number,number> = [20,30]

const couple : Coordinates<string,string> = ['Admin','Karim']

const player : Coordinates <string,number> = ['Abishek',300]




type UserObjectType = {
    name : string,
    roll : number,
    age : number
}

const userList:GenericArray<UserObjectType>  = [

    {
        name : 'Adnan',
        roll : 4,
        age : 5
    }
]

