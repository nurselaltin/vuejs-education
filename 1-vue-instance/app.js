const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Bootcamp 1. gün",
            content : "Lorem ipsum  dolor sit amet...",
            aObject: {
                url: "https://github.com/",
                target: "_blank",
                title: "Github"
            },
            boxCoords : {
                x: 0,
                y: 0
            }
            
        }
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(message , event){
            console.log(message);
          
            const title = event.x +","+ event.y;
            this.changeTitle(title);
            
            this.boxCoords = {
                x : event.x,
                y: event.y
            }
            // this.boxCoords.x = event.x;
            // this.boxCoords.y = event.y;
        }
    }
}).mount("#app");