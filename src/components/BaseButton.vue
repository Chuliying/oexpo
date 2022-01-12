<template>
  <div :class="theme">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    theme: String,
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  font-size: 18px;
  padding: 15px 25px;
  display: inline-block;
  margin: 35px 10px;
  border-radius: 10px;
  color: #000;
  background-color: #c4c4c4;
  letter-spacing: 2px;
  &.yellow {
    background-color: #ffff6d;
  }
}
</style>
>
