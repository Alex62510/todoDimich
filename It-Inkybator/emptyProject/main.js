const names = ["Donald", "Alex", "Bob"]
console.log(names.sort())
const names_2 = ["Donald", "Alex", "alex", "aLEX", "дима ", "Bob"]
console.log(names_2.sort())

const num = [2, 333, 10000, -33]
console.log(num.sort())
const compFunc = (a, b) => {
    if (a > b) {
        return 10
    } else {
        return -1
    }
}
console.log(num.sort(compFunc))
console.log(num.sort((a, b) => b - a))
console.log(num.reverse())

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        score: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        score: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        score: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        score: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        score: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        score: 89
    }
]

const sortByname = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(sortByname))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.age - b.age))
const num_2 = [2, 333, 10000, 999, -33]
for (let j = 0; j < num_2.length-1; j++) {
    for (let i = 0; i < num_2.length-1-j; i++) {
        if (num_2[i] > num_2[i + 1]) {
            [num_2[i + 1],num_2[i]]= [num_2[i],num_2[i + 1]]
        }
    }
}

console.log(num_2)