const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Bootcamp 1. gün",
            content : "Lorem ipsum  dolor sit amet...",
            aObject: {
                url: "https://github.com/",
                target: "_blank",
                title: "Github"
            }
            
        }
    }
}).mount("#app");;