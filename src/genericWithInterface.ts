

// this is generic type 
interface Developer<T, X=null> {
    name: string,
    sallary: number,
    position: string,
    isPermanent: boolean,
    id: string,


    smartWatch: T,
    bike?: X
}





type poorType = {
    heartBitck: boolean,
    stopWatch: boolean,
    bdt: string
}

type bikepoor = {
    name: string,
    cc: number
}
const PoorDev: Developer<poorType, bikepoor> = {
    name: 'm',
    sallary: 5000,
    position: 'Full Stack',
    isPermanent: true,
    id: '25047',


    smartWatch: {
        heartBitck: true,
        stopWatch: true,
        bdt: '30tk'
    },

    bike: {
        name: 'suzuky',
        cc: 500
    }
}






type richType = {
    call: boolean,
    calclulator: boolean,
    ai: boolean
}
const richDev: Developer<richType> = {
    name: 'rich',
    id: '343',
    sallary: 5666,
    position: 'backend',
    isPermanent: true,

    smartWatch: {
        calclulator: true,
        call: true,
        ai: true
    },
    bike : null

}

console.log(PoorDev,richDev)