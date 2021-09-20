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
                taskName : "Call the bank",
                isDone : false
            }
        ],
        newTask : {
            taskName : '',
            isDone : false
        }

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
        },
        
        checkStatus : function(element) {
            if ( element.isDone == true ) {
                return "done";
            } else {
                return "notDone";
            }
        },

        changeStatus : function(element) {
            if ( element.isDone == false ) {
                element.isDone = true;
            } else {
                element.isDone = false;
            }
        }
    },
});