<template >
    <div class="notes__row pa-4 d-flex justify-content-between">
        <div>
            <a href=""> :  تسک مانده {{ uncompletedCount }}</a>
        </div>
        <div>
            <a :class="{'selected': taskStatus == 0}"   class="note-buttons" @click="viewAlllTasks">همه </a>
            <a :class="{'selected': taskStatus == 1}"  class="note-buttons" @click="viewCompleted">تکمیل شده ها </a>
            <a :class="{'selected': taskStatus == 2}"  class="note-buttons" @click="viewUnCompleted">تکمیل نشده ها</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore();
const taskStatus = computed(() => store.getters["notes/getTasksViewStatus"]);
const uncompletedCount = computed(() => store.getters["notes/getUncompletedCount"]);
const viewAlllTasks = () => {
    store.commit('notes/changeTasksViewStatus', 0);
}
const viewCompleted = () => {
    store.commit('notes/changeTasksViewStatus', 1);
}
const viewUnCompleted = () => {
    store.commit('notes/changeTasksViewStatus', 2);
}
</script>
<style scoped lang="scss">
    .notes__row{
        border-top:1px solid #ddd;
        padding-top:3px;
        margin-top:10px;
        .note-buttons{
            &.selected{
                color:#111;
                font-size:13px;
            }
        }
    }
</style>