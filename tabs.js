//TABS

const aboutMeEl = document.getElementById("about-me")
const projectsEl = document.getElementById("projects")
const adminPanelEl = document.getElementById("admin-panel")

const aboutMeBtn = document.getElementById("about-me-btn")
const projectsBtn = document.getElementById("projects-btn")
const adminPanelBtn = document.getElementById("admin-panel-btn")

const selectedColor = "#DCBD87"
const nonSelectedColor = "#f1f1ea"
const hoveredColor = selectedColor

aboutMeBtn.style.color = selectedColor

aboutMeBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "block"
    aboutMeBtn.style.color = selectedColor
    projectsEl.style.display = "none"
    projectsBtn.style.color = nonSelectedColor
    adminPanelEl.style.display = "none"
    adminPanelBtn.style.color = nonSelectedColor
})

projectsBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "none"
    aboutMeBtn.style.color = nonSelectedColor
    projectsEl.style.display = "block"
    projectsBtn.style.color = selectedColor
    adminPanelEl.style.display = "none"
    adminPanelBtn.style.color = nonSelectedColor
})

adminPanelBtn.addEventListener("click", function(){
    aboutMeEl.style.display = "none"
    aboutMeBtn.style.color = nonSelectedColor
    projectsEl.style.display = "none"
    projectsBtn.style.color = nonSelectedColor
    adminPanelEl.style.display = "block"
    adminPanelBtn.style.color = selectedColor
})

