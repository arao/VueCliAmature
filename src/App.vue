<template>
  <div >
      <h1>{{title}}</h1>
      <ninjas></ninjas>
  </div>
</template>

<script>
  // local component registration
import Ninjas from './Ninjas.vue'
export default {
  components:{
    'ninjas': Ninjas
  },
  data () {
    return {
        title: "Delta App"
    }
  }
}
</script>

<style scoped>
  h1{
    color: purple;
  }
</style>
