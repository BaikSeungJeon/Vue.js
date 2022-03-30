<template>
  <div class="menu">
    <a v-for="작명 in 3" :key="작명">Home</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div :style="color1">
    <h1>홍대 원룸</h1>
    <p>1억</p>
  </div>
  <div :style="color2">
    <h1>마포 원룸</h1>
    <p>2억</p>
  </div>
  <div :style="color1">
    <h1>{{products[0]}} 원룸</h1>
    <p>1억</p>
  </div>
  <div :style="color1">
    <h1>{{products[1]}} 원룸</h1>
    <p>1억</p>
  </div>
  <div :style="color2">
    <h1>{{products[2]}} 원룸</h1>
    <p>2억</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data 보관함
  data(){
    return {
      // 자료 이름: 자료 내용
      color1: 'color: green',
      color2: 'color: purple',
      products:['강남', '판교', '마곡']
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
.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}
</style>




