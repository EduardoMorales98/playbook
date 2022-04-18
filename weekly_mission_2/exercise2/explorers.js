const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("Nombre de los explorers: ")
explorers.forEach(element => console.log(element.name))

console.log("\nStack de los explorers: ")
explorers.forEach(element => console.log(element.stack))

console.log("\nLista de stack de los explorers: ")
const stackList = explorers.map((element) => {return element.stack})
console.log(stackList)

console.log("\nLista de explorers que tienen js en su stack: ")
const stackListJS = explorers.filter((element) => {return element.stack.includes("js")})
console.log(stackListJS)

console.log("\nPrimer explorer que es de la CDMX: ")
const explorerCDMX = explorers.find((element) => element.city=="CDMX")
console.log(explorerCDMX)

console.log("\nSuma de los exercises_completed de los explorers: ")
const sumExercisesCompleted = explorers.reduce((acum, element) => acum + element.exercises_completed, 0)
console.log(sumExercisesCompleted)

console.log("\nAl menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true: ")
const exercisesFinishedft = explorers.some((element) => element.missions.frontend.exercisesFinished==true)
console.log(exercisesFinishedft)

console.log("\nTodos los explorers tienen la propiedad isFinished del onboarding como true: ")
const isFinishedOn = explorers.every((element) => element.missions.onboarding.isFinished==true)
console.log(isFinishedOn)
