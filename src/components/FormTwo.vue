<template>
    <div>
      <form-helper>
        <div slot="form-header">
          <h3>Form Two - Log In</h3>
          <p>Enter Your Detail to login</p>
        </div>

        <div slot="form-fields">
          <input type="text" placeholder="name" required>
          <input type="password" placeholder="password" required>
        </div>

        <div slot="form-controls">
          <button v-on:click="handleSubmit">Login</button>
        </div>
      </form-helper>
    </div>
</template>

<script>
  import FormHelper from './FormHelper.vue'
    export default {
      name: "FormTwo",
      components: {
        'form-helper':FormHelper
      },
      methods:{
        handleSubmit(){

        }
      }
    }
</script>

<style scoped>

</style>
