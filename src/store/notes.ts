export default {
    namespaced: true,
    state: {
        taskList:[],
        completedTasks:[],
        unCompletedTask:[],
        tasksViewStatus : 0,    //if tasks status be 0 it means view all tasks, 1 value means view completed and 2 value means view uncompleted
        
    },
    mutations: {
        setTaskList(state,item){
          
            state.taskList.push(item)
            localStorage.setItem('tasksListStorage', JSON.stringify(state.taskList));
        },

        changeTasksViewStatus(state,item){
            state.tasksViewStatus = item;
        },
        completeAllTasks(state){
            state.taskList.forEach(element => {
                element.isDone = true;
            });
        },
        removeCompletedTasks(state){
            var tasks = state.taskList;
            var newTasks = [];
            state.taskList = tasks.map((task) => {
                if (task.isDone == false) {
                    newTasks.push(task);
                }
              });
              state.taskList = newTasks;
              localStorage.setItem('tasksListStorage', JSON.stringify(state.taskList));
        },
    },
    getters: {
  
        getTasks(state) {
            if(localStorage.getItem('tasksListStorage')){
                state.taskList =  JSON.parse(localStorage.getItem('tasksListStorage'));
            }
            return state.taskList;
        },
       getTasksViewStatus(state){
        return state.tasksViewStatus;
       },
        getCompletedTasks(state) {
            var tasks = state.taskList;
           var  completed = [];
             tasks.map((task) => {
                if (task.isDone == true) {
                    completed.push(task);
                }
              });
              state.completedTasks = completed;
              localStorage.setItem('completedTaskStorage', state.completedTasks);
            return state.completedTasks;
        },
        getUncompletedTasks(state) {
            var tasks = state.taskList;
           var  uncompleted = [];
             tasks.map((task) => {
                if (task.isDone == false) {
                    uncompleted.push(task);
                }
              });
              state.unCompletedTask = uncompleted;
              localStorage.setItem('uncompletedTaskStorage', JSON.stringify(state.unCompletedTask));
            return state.unCompletedTask;
        },
        getUncompletedCount(state){
            var tasks = state.taskList;
            var  uncompleted = [];
              tasks.map((task) => {
                 if (task.isDone == false) {
                     uncompleted.push(task);
                 }
               });
            return uncompleted.length;
        }
    },
    actions: {
        addTask({ state, commit }, task) {
            commit('setTaskList', task);
        }
    },
};
