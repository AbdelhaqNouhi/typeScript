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


