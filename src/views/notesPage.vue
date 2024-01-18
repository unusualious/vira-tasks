<template>
    <div class="notes__container">
        <div class="notes__box">
      <div class="notes__sec">
        <notes />
    </div>
    
</div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue';
import notes from '../components/notesComp.vue'
export default defineComponent({
  name: 'notesPage',
  components: {notes},
  setup() {
  }
});
</script>
<style lang="scss">
.notes__container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  .notes__box{
    width: 50%;
    .notes__sec{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 25px 10px;
    border-radius: 8px;
    background: #fff;
    border-radius: 8px;
    min-height: 300px;
  box-shadow: 0px 14px 80px rgb(0 0 0 / 4%);

}
  }
}

</style>