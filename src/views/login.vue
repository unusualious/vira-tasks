<template>
  <div class="login__page">
  <div class="login__box">
        <div class="login__body">
          <div class="input-group mb-4">

            <input
              type="text"
              class="form-control "
              placeholder="نام کاربری"
              aria-label="نام کاربری"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="کلمه عبور"
              aria-label="کلمه عبور"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary btn-lg btn-block" @click="loginRes">ورود</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
export default defineComponent({
    name: 'login',
    setup() {
        const store = useStore();
        const loginRes = () => {
            var result =  store.dispatch("authentication/signIn");
            console.log(result);
    };
    return{
      loginRes
    }
    }
});
</script>

<style lang="scss" scoped>
.login__page{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  .login__box{
    width: 30%;
  }
}
</style>