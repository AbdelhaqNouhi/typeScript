// Basic types
let id: number = 5
let user: string = "abdelhaq"
let isHere: boolean = true 
let x: any = "hello"
let age: number = 24

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 'nouhi', true]

// Tuple
let person: [number, string, boolean] = [1, 'anouhi', false]

// Typel array 

let employee: [number, string] []

employee = [
    [1, 'med'],
    [2, 'brahim'],
    [3, 'hala']
]

// Union 
let ref: string | number

ref = 33
ref = '33'


// functions
function addnumber(x:number , y: number): number {
    return x + y
}

console.log(addnumber(5, 6));


// interface 
interface UserInterface {
    id: number
    name: string
    age?: number   // use ? to make optional
}

const user2: UserInterface = {
    id: 1,
    name: 'gaba',
}


interface MathFanc {
    (x: number, y: number,): number
}

const add: MathFanc = (x: number, y: number): number => x + y
const sub: MathFanc = (x: number, y: number): number => x + y

// classes
class Person {
    id: number 
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const brad = new Person(1, 'brad ziani')
const mike = new Person(2, 'mike gaba')


//  sub class 
class Client extends Person {
    point: string

    constructor(id: number, name: string, point: string) {
        super(id, name)
        this.point = point
    }
}

const p = new Client(3, 'abdelhaq', 'Developer')

// console.log(p);


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray<string>(['hala', 'gaba', 'nouhi'])

numArray.push(8)

console.log(numArray);



