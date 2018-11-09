import JobsService from "./jobs-service.js";

//PRIVATE

let _jobsService = new JobsService()

//PUBLIC

export default class JobsController {
  constructor() {
  }

  showJobs() {
    let jobs = _jobsService.getJobs()
    let template = ''

    jobs.forEach(job => {
      template += `
    <div class="col card">
      <h3>Title: ${job.title} </h3>
      <h5>Company: ${job.company}</h5>
      <h5>Compensation: ${job.pay}</h5>
      <p>Description: ${job.description}</p>
    </div>
    `
    })
    document.getElementById('main-content').innerHTML = template
  }
  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      title: form.title.value,
      company: form.company.value,
      pay: form.pay.value,
      description: form.desciption.value
    }
    _jobsService.addJob(formData)
    this.showJobs()
    form.reset()
  }
}