<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this Form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label > Your Message</label>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import FormHelper from './FormHelper.vue'
  export default {
    name: "FormOne",
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
