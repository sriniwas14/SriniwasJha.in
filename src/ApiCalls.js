exports.activeProjects = [
    { projectId: "1", title: "Project One", description: "Lorem Ipsum dolor sit amet", badges: ["Video Game", "Godot", "GDScript"], src: "https://via.placeholder.com/350x200" },
    { projectId: "2", title: "Project Two", description: "Lorem Ipsum dolor sit amet", badges: ["Desktop App", "Java"], src: "https://via.placeholder.com/350x200" },
    { projectId: "3", title: "Project Three", description: "Lorem Ipsum dolor sit amet", badges: ["Web App", "ReactJs", "NodeJs"], src: "https://via.placeholder.com/350x200" },
]

exports.slides = [
    { projectId: "1", slides:[
        { title: "First", description: "First", image: "https://via.placeholder.com/1200x400" },
        { title: "Second", description: "Second", image: "https://via.placeholder.com/1200x400" },
        { title: "Third", description: "Third", image: "https://via.placeholder.com/1200x400" }
    ] },
    { projectId: "2", slides:[
        { title: "First", description: "First", image: "https://via.placeholder.com/1200x400" },
        { title: "Second", description: "Second", image: "https://via.placeholder.com/1200x400" },
        { title: "Third", description: "Third", image: "https://via.placeholder.com/1200x400" }
    ] },
    { projectId: "3", slides:[
        { title: "First", description: "First", image: "https://via.placeholder.com/1200x400" },
        { title: "Second", description: "Second", image: "https://via.placeholder.com/1200x400" },
        { title: "Third", description: "Third", image: "https://via.placeholder.com/1200x400" }
    ] }
]

exports.getProjectById = (id) => {
    for(var i=0; i<this.activeProjects.length; i++){
        if(id===this.activeProjects[i].projectId){
            return this.activeProjects[i]
        }
    }
}

exports.getSlidesById = (id) => {
    for(var i=0; i<this.slides.length; i++){
        if(id===this.slides[i].projectId){
            return this.slides[i]
        }
    }
}