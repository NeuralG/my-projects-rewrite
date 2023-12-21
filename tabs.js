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

adminPanelEl.style.display = "none"

aboutMeBtn.addEventListener("click", function(){
    aboutMeEl.style.display = window.matchMedia("(min-width: 1100px)").matches ? "flex" : "block"
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
    adminPanelEl.style.display = window.matchMedia("(min-width: 1100px)").matches ? "flex" : "block"
    adminPanelBtn.style.color = selectedColor
})

window.matchMedia("(min-width: 1100px)").addEventListener("change", function(){
    if (aboutMeEl.style.display != "none"){
        aboutMeEl.style.display = window.matchMedia("(min-width: 1100px)").matches ? "flex" : "block"
    }
    if (adminPanelEl.style.display != "none"){
        adminPanelEl.style.display = window.matchMedia("(min-width: 1100px)").matches ? "flex" : "block"
    }
})
