<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>
    <h1>List of Ninjas</h1>
    <ul>
      <li v-for="(ninja,index) in ninjas">{{index}}.{{ninja}}</li>
    </ul>

  </div>
</template>

<script>
    export default {
        data(){
          return {
            ninjas:['Yoshi', 'Mario', 'Ryu']
          }
        }
    }
</script>

<style scoped>
h1{
  color: green;
}
</style>
