<template>
  <div>
    <footer>
      <p>{{ copyright }} {{myTitle}}</p>
    </footer>
  </div>
</template>

<script>
  import { bus } from '../main'
  export default {
    props: {
      title: {type: String}
    },
    data() {
      return {
        copyright: "Copyright 2018",
        myTitle : this.title
        // this extra variable is use to privent changing props variable since they are pass by reference
      }
    },
    created(){
      bus.$on('changeTitle', (newTitle)=>{
        this.myTitle = newTitle;
      })
    }
  }
</script>

<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color : lightgreen;
    text-align: center;
  }
</style>
