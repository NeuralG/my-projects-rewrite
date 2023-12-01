const aboutMeEl = document.getElementById("about-me")
const projectsEl = document.getElementById("projects")
const adminPanelEl = document.getElementById("admin-panel")

const aboutMeBtn = document.getElementById("about-me-btn")
const projectsBtn = document.getElementById("projects-btn")
const adminPanelBtn = document.getElementById("admin-panel-btn")


aboutMeBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "block"
    projectsEl.style.display = "none"
    adminPanelEl.style.display = "none"
})

projectsBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "none"
    projectsEl.style.display = "block"
    adminPanelEl.style.display = "none"
})

adminPanelBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "none"
    projectsEl.style.display = "none"
    adminPanelEl.style.display = "block"
})