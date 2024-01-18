<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import headerComp from './components/header.vue';
</script>

<template>
  <div>
    <!-- <header /> -->
   <headerComp />
    <RouterView />
  </div>


</template>

<style scoped>
</style>
