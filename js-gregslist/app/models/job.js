export default class Job {
  constructor(data) {
    if (!data._id || !data.company || !data.hours || !data.hasOwnProperty('rate')) {
      throw new Error('Invalid Job Creation')
    }
    this._id = data._id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }
} console.log(3)