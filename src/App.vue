<template>
  <div>
    <button @click="component='form-one'">Show Form One</button>
    <button @click="component='form-two'">Show Form One</button>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'
export default {

  components:{
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data(){
    return{
      component:'form-one'
    }
  },
  methods:{
    handleSubmit(){

    }
  }
}
</script>

<style scoped>

</style>
