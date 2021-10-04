<template>
  <div class="home">
    <h1>Vue State Counter</h1>

    <p class="count">{{ count }}</p>

    <div class="change-count">
      <i @click="increase" class="fal fa-plus"></i>
      <i @click="decrease" class="fal fa-minus"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const count = ref(0);

    const increase = () => {
      count.value++;
    };

    const decrease = () => {
      count.value--;
    };

    return { count, increase, decrease };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 16px;
}

.count {
  margin-top: 32px;
  font-size: 60px;
  text-align: center;
}

.change-count {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 32px;

  i {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f1f1f1;
    font-size: 40px;
  }
}
</style>
