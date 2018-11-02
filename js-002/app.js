// //Truthy
// //String with contents
// //Empty Object
// //Array
// //Non 0 numbers
// //TAKE UP MEMEORY

// //Falsy
// //Empty String
// //Zero
// //Undefined
// //Null
// //False
// //DO NOT TAKE UP MEMORY

// let me = {
//   username: 'Criddy',
//   email: 'tunamelt@chrissy.com',
//   formal: 'Ms.',
//   name: 'Chrissy'
// }

// let greeting = ''





// function greet(user) {
//   // variables created in the function only exist in the function unless returned
//   if (!user) {
//     console.log('No user!!')
//     return
//   }
//   if (user.formal) {
//     greeting = 'Hello' + user.name
//     return
//   }
//   greeting = `Hello ${user.formal} ${user.name}`
// }

// greet()
// greet(me)
// console.log(greeting)

// function greet2(user) {
//   if (!user) {
//     return 'No user!!'
//   }
//   if (!user.formal) {
//     return 'Hello' + user.name
//   } else {
//     greeting = `Hello ${user.formal} ${user.name}`
//   }
// }

// console.log(greet2())



// function getRent(cityName) {
//   // if (cityName == "boise") {
//   //   return 1000
//   // }
//   // else if (cityName == "portland") {
//   //   return 4000
//   // } else if (cityName == "losAngeles") {
//   //   return 10000
//   // }
//   // return "no data"
//   let out = 0
//   switch (cityName.toLowerCase()) {
//     case 'boise':
//       out = 1000
//       break;
//     case 'portland':
//       out = 4000
//       break;
//     case 'new york':
//       console.log('Hello from the big apple')
//     case 'los angeles':
//     case 'barcelona':
//       out = 10000
//       break;
//     default:
//       out = NaN
//   }


//   return out
// }

// console.log(getRent)

// let rent = {
//   boise: 1000,
//   portland: 4000,
//   losAngeles: 10000
// }

// function getRentFromData(cityName) {
//   //dot notation looks for the literal property name
//   //bracket notation is passing variables as property names
//   if (rent[cityName]) {
//       return rent[cityName]  //rent.boise
//     }
//     return NaN
// }




function dayOfWeek(num) {
  let out = ''
  switch (num) {
    case 0:
      out = 'Sunday'
      break;
    case 1:
      out = 'Monday'
      break;
    case 2:
      out = 'Tuesday'
      break;
    case 3:
      out = 'Wednesday'
      break;
    case 4:
      out = 'Thursday'
      break;
    case 5:
      out = 'FriYAY'
      break;
    case 6:
      out = 'Saturday'
      break;
    default:
      out = 'Invalid Day'
  }
  return out
}

let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function arrayDay(num) {
  if (num > -1 && num < daysOfTheWeek.length) {
    return daysOfTheWeek[num]
  }
  return 'invalid day'
}

