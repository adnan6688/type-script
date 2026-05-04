



// function with generic type

// T,X,Y mean perametter of type
const createWithGeneric = <T, X, Y>(value: T, bal: X, ybal: Y) => {
    return [value, bal, ybal]
}











const createWithNumber = createWithGeneric(5, 5, 'abc')
const createWithUserObject = createWithGeneric({ name: 'adnan', roll: 45 }, [5], 'f')
// console.log(createWithNumber, createWithUserObject)
















type constaintType = {
    id: string,
    name: string,
    position : string
}

const addStudentToCourses = <T extends constaintType>(studentInfo: T) => {


    return {
        course: 'Next level',
        ...studentInfo
    }

}


const student1 = {
    id: '123',
    name: 'Adnan',
    position : 'student'
}
const student2 = {
    id: '3434',
    name: 'Kasem',
    isMarried: true,
    pen: true,
    position : 'student'
}

const result = addStudentToCourses(student2)
const result2 = addStudentToCourses(student1)
console.log(result, result2)