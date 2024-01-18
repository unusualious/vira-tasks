<template>
        <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">صفحه اصلی</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/notes">یادداشت ها</RouterLink>
            </li>
          </ul>
        </div>
        <RouterLink class="btn btn-primary" to="/login">ورود به حساب</RouterLink>
      </div>
    </nav>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>