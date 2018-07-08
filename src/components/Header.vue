<template>
    <header>
      <h1 @click="changeTitle">
        {{ myTitle }}
      </h1>
    </header>
</template>

<script>
  import { bus } from '../main'
    export default {
      props:{
        title:{type:String}
      },
      data(){
          return  {
            myTitle : this.title
            // this extra variable is use to privent changing props variable since they are pass by reference
          }
      },
      methods:{
        changeTitle(){
          this.myTitle = 'Vue Wizard';
          bus.$emit('changeTitle', 'Vue Wizard')
        }
      },
      beforeCreate(){
        alert('before created')
      },
      created(){
        alert('created');
      },
      beforeMount(){
        alert('before mounted');
      },
      mounted(){
        alert('mounted');
      },
      beforeUpdate(){
        alert('before Updated');
      },
      updated(){
        alert('updated');
      }
    }
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
