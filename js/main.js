const app = new Vue( {
    el : "#root",
    data : {
        tasks: [
            
            {
                taskName : "Do the laundry",
                isDone : false
            },

            {
                taskName : "Do the dishes",
                isDone : false
            },

            {
                taskName : "Call bank",
                isDone : false
            }
        ],
        newTodo : '',
    },
    methods : {
        

    }
});