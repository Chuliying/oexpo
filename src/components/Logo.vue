<template>
  <router-link to="/">
    <div class="logo">
      <img v-if="fullLogo" src="@/assets/company_LOGO_3.png" alt="logo" />
      <img v-if="!fullLogo" src="@/assets/businesscard_logo.png" alt="logo" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  props: {
    fullLogo: Boolean,
  },
};
</script>

<style lang="scss" scope>
.logo {
  margin: 25px auto 45px;
  text-align: center;
  img {
    width: 193px;
  }
}
</style>
