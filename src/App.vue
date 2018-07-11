<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  import showBlogs from './components/showBlogs'
export default {
  name:'app',
  components:{
      'add-blog':addBlog,
      'show-blogs':showBlogs
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
