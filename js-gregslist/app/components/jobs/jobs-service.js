import Job from "../../models/job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs/"
})

// /**@type {Array<Job>} */
let _jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobsService {

  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)
  }

  addJob(formData, showJobs) {

    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof showJobs != 'function') {
      throw new Error("You must supply a success function")
    }

    _api.post('', formData)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)

  }
  getJobs(showJobs) {
    _api.get('')
      .then(res => {
        _jobs = res.data.data.map(item => new Job(item))
        showJobs();
      })
      .catch(handleError)
  }
  get jobs() {
    return _jobs
  }
}