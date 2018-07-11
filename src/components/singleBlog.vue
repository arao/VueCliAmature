<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
    export default {
      name: "singleBlog",
      data(){
        return{
          id:this.$route.params.id,
          blog:{}
        }
      },
      created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
          .then(data=>{
            this.blog = data.body;
          })
          .catch(err=>{
            console.log(err);
            alert('error in fetching blog');
          })
      }
    }
</script>

<style scoped>

</style>
