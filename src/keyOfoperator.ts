


// key of operator


type RichpeoplesVehicle = {
    car : string,
    bike : string,
    cng : string
}


type myVehicle = "bike" | "car" | "cng"

type myVehicle2 = keyof RichpeoplesVehicle

const myVehicle2 : myVehicle2 = "bike"

type User = {
    id : number,
    name : string,
    address : {
        city : string
    }
}

const user = {
    id : 34,
    name : 'as',
    address : {
        city : 'noakhali'
    }
}


type Iproduct = {
    id : string,
    price : number
}



const product = {
    id : 'xts',
    price : 500
}


const getPropertyOfObject = <T> (obj : T  , key : keyof T)=>{
    return obj[key]
}

const result =getPropertyOfObject(user,'address')
const productResult  = getPropertyOfObject(product,'price')
console.log(result,productResult)