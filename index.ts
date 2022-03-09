
interface DataAnswer {
    dt:string;
    quantity: number;
    age: number;
    field: DataTemp
}

interface DataTemp {
        temperature: string;
        city: string;
        optional?:boolean | null
}

// const str : string = ""
// const strTemp : string = ""

const arrDataAnswer : DataAnswer[]=[
    {
        dt: "01-01-2021",
        quantity: 100,
        age: null,
        field:arrDataTemp
    }
]
const arrDataTemp : DataTemp[] = {
    temperature: "100 degrees",
    city: "Norway",
    optional: null,
}