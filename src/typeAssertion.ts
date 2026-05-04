let anything: any;

anything = 'hi';

// (anything as string).length  // type assertion


const kgtoGm = (input: string | number): string | number | undefined => {

    if (typeof input === 'number') {
        return input * 1000
    }
    else if (typeof input === 'string') {

        const value = Number(input.split(' ')[0])

        return `${value * 1000} kg`
    }

}
const result1 = kgtoGm(3) as number;
const result2 = kgtoGm('2 kg') as string;



console.log(result1, result2)


type customtype = {
    message: string
}
try {


} catch (err) {
    console.log((err as customtype).message)
}