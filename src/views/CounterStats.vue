<template>
  <div class="about">
    <h1>Counter Stats:</h1>
    <p>Current Count: {{ count }}</p>
    <p>Current Color: {{ color }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "../store/index";
export default {
  name: "stats",
  setup() {
    const count = computed(() => store.state.count);
    const color = computed(() => store.state.color);

    return { count, color };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
}

p {
  margin-top: 16px;
  font-size: 24px;
}
</style>
