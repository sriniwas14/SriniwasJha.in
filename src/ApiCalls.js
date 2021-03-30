const Images = require.context('./assets/Slides', true);

exports.activeProjects = [
    { projectId: "1", title: "Chat App", description: "A Chat Application made with React and Express using Web Sockets", introduction: "A Chat Application made with React and Express using Web Sockets", badges: ["React", "Express", "SocketIO", "MySQL"], src: Images("./chatapp_one.jpg").default, details:{ platforms: ["Web"], status: "Prototype", projectUrl: "http://apps.sriniwasjha.in/chatapp/", releaseDate: "N/A" } },
    { projectId: "2", title: "Exam Player", description: "A Quiz Application Made with React", introduction: "A Quiz Application Made with React, the project is using react-bootstrap as a CSS framework and react-spring for animations.", badges: ["React", "JavaScript", "SCSS"], src: Images("./examplayer_one.jpg").default, details:{ platforms: ["Web"], status: "Prototype", projectUrl: "http://apps.sriniwasjha.in/examplayer", releaseDate: "TBD" } },
    { projectId: "3", title: "Naughty Elves", description: "A Pixel-Art Top Down game made with the Godot Engine", introduction: "A Pixel-Art Top Down game made with the Godot Engine", badges: ["Godot", "GDScript", "Pixel-Art"], src: Images("./naughtyelves_one.jpg").default, details:{ platforms: ["Web", "Linux", "Windows", "Mac"], status: "Complete", projectUrl: "https://eprox.itch.io/naughty-elves", releaseDate: "December 26, 2020" } }
]

exports.slides = [
    { projectId: "1", slides:[
        { title: "", description: "", image: Images("./chatapp_one.jpg").default },
        { title: "", description: "", image: Images("./chatapp_two.jpg").default }
    ] },
    { projectId: "2", slides:[
        { title: "", description: "", image: Images("./examplayer_one.jpg").default },
        { title: "", description: "", image: Images("./examplayer_two.jpg").default },
        { title: "", description: "", image: Images("./examplayer_three.jpg").default }
    ] },
    { projectId: "3", slides:[
        { title: "", description: "", image: Images("./naughtyelves_one.jpg").default },
        { title: "", description: "", image: Images("./naughtyelves_two.jpg").default },
        { title: "", description: "", image: Images("./naughtyelves_three.jpg").default },
        { title: "", description: "", image: Images("./naughtyelves_four.jpg").default }
    ] }
]

exports.getProjectById = (id) => {
    return this.activeProjects.find(activeProject => activeProject.projectId===id)
}

exports.getSlidesById = (id) => {
    for(var i=0; i<this.slides.length; i++){
        if(id===this.slides[i].projectId){
            return this.slides[i]
        }
    }
}