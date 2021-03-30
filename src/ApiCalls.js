const Images = require.context('./assets/Slides', true);

exports.activeProjects = [
    { projectId: "1", title: "Chat App", description: "A Chat Application made with React and Express using Web Sockets", introduction: "A Chat Application made with React and Express using Web Sockets", badges: ["React", "Express", "SocketIO", "MySQL"], src: Images("./chatapp_one.jpg").default, details:{ platforms: ["Web"], status: "Prototype", projectUrl: "http://apps.sriniwasjha.in/chatapp/", releaseDate: "N/A" } },
    { projectId: "2", title: "Exam Player", description: "A Quiz Application Made with React", introduction: "A Quiz Application Made with React, the project is using react-bootstrap as a CSS framework and react-spring for animations.", badges: ["React", "JavaScript", "SCSS"], src: Images("./examplayer_one.jpg").default, details:{ platforms: ["Web"], status: "Prototype", projectUrl: "http://apps.sriniwasjha.in/examplayer", releaseDate: "TBD" } }
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