import Target from '../models/target.js'

//private - DATA GOES HERE
//anything in here is protected from the slap controller


let target = new Target('Mr. Bill', 100)

export default class SlapService {
  constructor() {
    console.log('MAKING SLAP SERVICE ')
  }
  slap() {
    target.health--
    return target.health
  }
}