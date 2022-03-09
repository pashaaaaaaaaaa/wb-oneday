let arr = [
    {
      "dt": "01-01-2021",
      "quantity": 100,
      "age": null,
      "temp": {
        "temperature": "100 degrees",
        "city'": "Norway"
      }
    },
    {"dt": "02-01-2021",
      "quantity": 150,
      "age": 23,
      "temp": {
        "temperature": "103 degrees",
        "city": "Egypt"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Kypris"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Holland"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    }
    ]


let filterArr = arr.filter(function(item){
    return item
})

console.log(filterArr)

let newArr = []

arr.forEach((item) => {
    return newArr.push(item.dt)
})
const setArr = new Set(newArr)
console.log(setArr)

let mapArr = []
setArr.forEach((elem) => {
    return mapArr.push(elem)
})

 let mapFunc = new Map();
 
 arr.forEach((item) => {
    const copyArr = Object.assign({}, item)
    console.log(copyArr)
    delete copyArr.dt; 
    mapFunc.get(item.dt)? mapFunc.get(item.dt).push(copyArr) : mapFunc.set(item.dt, [copyArr]);
 })
console.log(mapFunc)




