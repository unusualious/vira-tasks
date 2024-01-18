<template >
    <div class="notes__row pa-4 mb-3">
        <div class="form-group add-task-input">
            <input @keyup.enter="addTask()" v-model="addedTask" class="form-control " placeholder="متن خود را تایپ نمایید">
            <span v-if="addedTask" @click='addTask'>+</span>
        </div>
    </div>
</template>
<script setup  lang="ts">
import { ref, computed, defineModel } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const tasks = computed(() => store.getters["notes/getTasks"])
const props = defineProps({
    tasksList: Array
})
const addedTask = defineModel('addedTask')

const addTask = () => {
    if (addedTask.value) {
        var task = { name: `${addedTask.value}`, isDone: false };
        store.dispatch('notes/addTask', task);
        addedTask.value="";
    }

};
</script>
<style lang="">
    
</style>