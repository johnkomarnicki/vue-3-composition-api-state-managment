<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/counter-stats">Counter Stats</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: "Noto Sans", sans-serif;

  .nav {
    margin-bottom: 16px;
  }
}
</style>
