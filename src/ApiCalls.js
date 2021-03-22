exports.activeProjects = [
    { projectId: "1", title: "Chat App", description: "A Chat Application made with React and Express using Web Sockets", introduction: "Follow haskell in his quest to destroy Jotnar and bring restore peace to the realm of man.", badges: ["Video Game", "Godot", "GDScript"], src: "https://www.sriniwasjha.in/assets/assets/Slides/chatapp_one.jpg", details:{ platforms: ["Android", "Windows", "Linux"], status: "In Development", projectUrl: "https://www.github.com", releaseDate: "TBD" } },
    { projectId: "2", title: "DownMann", description: "A Download Manager/Accelerator for the Gnome Desktop", introduction: "A Download Manager/Accelerator for the Gnome Desktop", badges: ["Desktop App", "Java"], src: "https://www.sriniwasjha.in/assets/project_two/project_two_preview.png", details:{ platforms: ["Linux"], status: "In Development", projectUrl: "https://www.github.com", releaseDate: "TBD" } },
    { projectId: "3", title: "Elisa", description: "A Kanban Board Made With React and NodeJs", introduction: "A Kanban Board Made With React and NodeJs", badges: ["Web App", "ReactJs", "NodeJs"], src: "https://www.sriniwasjha.in/assets/project_three/project_three_preview.png", details:{ platforms: ["Web"], status: "In Development", projectUrl: "https://www.github.com", releaseDate: "TBD" } },
]

exports.slides = [
    { projectId: "1", slides:[
        { title: "First", description: "First", image: "https://www.sriniwasjha.in/assets/project_one/project_one_image_one.png" },
        { title: "Second", description: "Second", image: "https://www.sriniwasjha.in/assets/project_one/project_one_image_two.png" },
        { title: "Third", description: "Third", image: "https://www.sriniwasjha.in/assets/project_one/project_one_image_three.png" }
    ] },
    { projectId: "2", slides:[
        { title: "First", description: "First", image: "https://www.sriniwasjha.in/assets/project_two/project_two_one.png" }
    ] },
    { projectId: "3", slides:[
        { title: "First", description: "First", image: "https://www.sriniwasjha.in/assets/project_three/project_three_one.png" }
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