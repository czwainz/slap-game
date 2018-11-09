import Job from "../../models/job.js";

let _fancyJobs = []

export default class JobsService {
  addJob(formData) {
    let newJob = new Job(formData)
    _fancyJobs.push(newJob)
  }
  getJobs() {
    return _fancyJobs
  }
}