// Basic Types
let id: number = 5
let company: string = "My Company"
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, 2, "three", true]

//Tuple
let person: [number, string, boolean] = [1, "Pooja", true]


let employee: [number, string][]
employee = [
    [1, "Pooja"],
    [2, "Pratik"]
]

// Union
let identifier: string | number = 22
identifier = '22'

// Enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up)

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "Pooja"
}

type User = {
    id: number,
    name: string
}

const userTwo: User = {
    id: 2,
    name: "Pratik"
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
//or
let customerIdTwo = cid as number

// Functions
function addNum(x: number, y: number): number{
    return x + y
}

function log(message :string|number): void{
    console.log(message)
}

console.log(addNum(1,4))
log("hiiiii")

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string
    age?: number // optional
}

const user1: UserInterface = {
    id: 2,
    name: "Pratik"
}
user1.age = 33

// NOTE: use interface over type for creating objects

type Point = number | string

const p1: Point = 'one'

// Interfaces with func
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes

class Person {
    id: number // public by default
    private name: string
    protected funFact?: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const pooja = new Person(1, "pooja")
console.log(pooja.register())

// Class implmenting an interface
interface PersonInterface {
    id: number,
    name: string
    
    register(): string
}

class PersonNew implements PersonInterface{
    id: number 
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

// Subclasses
class Employee extends Person{
    position: string
    
    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(1, "pooja", "developer")
console.log(emp1.register())
console.log(emp1.position)

// Generics
function getArray(items: any[]): any[]{
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(["jack", "jill", "john"])

numArray.push("one") // this will accept string since we have type any.

function getGenericArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let genNumArray = getGenericArray([1,2,3,4])
let genStrArray = getGenericArray(["jack", "jill", "john"])

// getGenericArray.push("one")  //this is now not allowed