<template>
  <div class="">
    <div class="container">
      <router-view></router-view>
      <Copyright />
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import Copyright from "./components/Copyright.vue";
export default {
  name: "App",
  components: {
    Copyright,
  },
};
</script>
<style scoped>
.blackTheme >>> h1,
.blackTheme >>> p,
.blackTheme >>> label,
.blackTheme >>> input{
  color: #fff;
}

.blackTheme >>> .policyText p {
  color: #000;
}

.blackTheme >>> .alertText {
  color: red;
}
.blackTheme .bg {
  background: #000;
}
</style>
