<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div :style="color1">
    <h1>홍대 원룸</h1>
    <p>{{ price1 }}</p>
  </div>
  <div :style="color2">
    <h1>마포 원룸</h1>
    <p>{{ price2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data 보관함
  data(){
    return {
      // 자료 이름: 자료 내용
      price1: '2억',
      price2: '1억',
      color1: 'color: green',
      color2: 'color: purple'
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
