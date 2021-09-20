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
        newTask : {
            taskName : '',
            isDone : false
        },
    },
    methods : {

        addTask : function() {
            if ( this.newTask.taskName != "") {
                let newObj = { taskName : this.newTask.taskName, isDone : false};
                this.tasks.push(newObj);
                this.newTask.taskName = '';
            }
        },

        removeTask : function(taskIndex) {
            this.tasks.splice(taskIndex, 1);
        }
        

    }
});