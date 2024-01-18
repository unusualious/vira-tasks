<template >
           <div class="d-flex justify-content-between task__operation__row">
            <a class="note-buttons"  @click="CompleteTasks">تکمیل همه تسک ها</a>
            <a class="note-buttons" @click="removeCompleted" >حذف تکمیل شده ها</a>
        </div>
</template>
<script lang="ts">
import { ref, computed, defineModel } from 'vue';
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const CompleteTasks = () => {
        store.commit('notes/completeAllTasks');
   }
   const removeCompleted = (task) => {
        store.commit('notes/removeCompletedTasks');
   }
    return {
        CompleteTasks,removeCompleted
    }
  },
}
</script>
<style lang="scss" scoped>
    .task__operation__row{
        border-bottom:1px solid #ddd;
        margin:10px 0;
        padding-bottom:5px
    }
</style>