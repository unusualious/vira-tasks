<template>
    <addTasks />
    <taskOperations />

    <tasksListComponent />
    <tasksFilter />
</template>
<script  lang="ts">
import { defineComponent, ref } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import addTasks from '@/components/tasks/addtasks.vue';
import tasksListComponent from '@/components/tasks/tasksList.vue';
import taskOperations from '@/components/tasks/taskOperations.vue';
import tasksFilter from '@/components/tasks/tasksFilter.vue';
export default defineComponent({
    name: 'notes',
    components: { addTasks, tasksListComponent, taskOperations, tasksFilter },
    setup() {
        return {
            
        }
    }
});
</script>
<style lang="css"></style>