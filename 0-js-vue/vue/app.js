const app = Vue.createApp({
    data(){
        return{
            todoText : null,
            todoList: [],
        }
    },
    method: {
        addTodo(){
            this.todoList.push(this.todoText);
        }
    }
}).mount("#app");