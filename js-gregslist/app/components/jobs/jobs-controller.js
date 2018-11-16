import JobsService from "./jobs-service.js";
//PRIVATE
let _jobsService = new JobsService()

let jobs = []

function _fancyJobs(_jobs) {
  jobs = _jobs;
}

//PUBLIC

export default class JobsController {
  constructor() {
    _jobsService.getJobs(_fancyJobs)
  }

  showJobs() {
    let jobs = _jobsService.jobs
    let jobTemplate = ''
    let formTemplate = ''
    jobs.forEach(job => {
      jobTemplate += `
      <div class="col-3 my-1 mx-1 card">
        <div class="card-body">
          <h5 class="card-title">Job Title: ${job.jobTitle}</h5>
            <div class="card-text">
              <h6>Company: ${job.company}</h6>
              <h6>Compensation: ${job.rate}</h6>
              <h6>Hours Required: ${job.hours}</h6>
              <p>Description: ${job.description}</p>
            </div>
            <div>
              <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.autosController.destroyJob('${job._id}')"></i>
            </div>
          </div>
      </div>`
    })
    formTemplate += `
    <form onsubmit="app.controllers.jobsController.addJob(event)">
      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" name="company" />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" />
      </div>
      <div class="form-group">
        <label for="rate">Compensation</label>
        <input type="number" name="rate" />
      </div>
      <div class="form-group">
        <label for="hours">Hours Required</label>
        <input type="number" name="hours" />
      </div>
      <div class="form-group">
        <label for="description">Job Description</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add Job</button>
    </form>`
    document.getElementById('form-content').innerHTML = formTemplate
    document.getElementById('main-content').innerHTML = jobTemplate
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value
    }
    _jobsService.addJob(formData, this.showJobs)
    form.reset()
  }

  destroyJob(id) {
    _jobsService.destroyJob(id, this.showJobs)
  }
}