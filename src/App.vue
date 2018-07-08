<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Title of form</h3>
        <p>Information about form</p>
      </div>

      <div slot="form-fields">
        <label for="name">Name: </label>
        <input type="text" placeholder="name" id="name" required>
        <label for="password">Password :</label>
        <input type="password" placeholder="password" id="password" required>
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>

    </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'
export default {

  components:{
    'form-helper': FormHelper
  },
  data(){
    return{
      title: "This is slot Title"
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
