<template>
    <div class="notes__row pa-4" v-for="(task, index) in taskListt" ::key="task">
        <div  class="note__check ma-2">
            <input @change="updateTaskState(task)" class="form-check-input" :checked="task.isDone == true ? true : false"
                type="checkbox" value="">
            <label :class="{'done': task.isDone == true}" class="form-check-label" for="flexCheckDefault">
                {{ task.name }}
            </label>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const taskList = computed(() => store.getters["notes/getTasks"]);
        const getTasksViewStatus = computed(() => store.getters["notes/getTasksViewStatus"]);
        const taskListt = computed(() => {
            var taskk = [];
            switch (getTasksViewStatus.value) {
                case 0:
                    taskk = computed(() => store.getters["notes/getTasks"]);
                    break;
                case 1:
                    taskk = computed(() => store.getters["notes/getCompletedTasks"]);
                    break;
                case 2:
                    taskk = computed(() => store.getters["notes/getUncompletedTasks"]);
                    break;
            }
            console.log(taskk.value);
            return taskk.value;
        });
        const updateTaskState = (task) => {
            task.isDone = !task.isDone;
        }
        return {
            taskList,
            updateTaskState,
            getTasksViewStatus,
            taskListt
        }
    },
}
</script>
<style lang="scss">
    .done{
        text-decoration: line-through;
    }
</style>