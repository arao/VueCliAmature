<template>
  <div id="show-blogs">
    <h1>All Blog Article</h1>
    <div v-for="blog in this.blogs" class="single-blog">
        <h2>{{blog.title}}</h2>
        <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
    export default {
      name: "showBlogs",
      data(){
        return {
          blogs :[]
        }
      },
      methods:{

      },
      created(){
          this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then((data)=>{
                // console.log(data);
                this.blogs = data.body.slice(0,10);
                console.log(this.blogs);
            })
            .catch(err=>{
                console.log(err);
            })
      }
    }
</script>

<style scoped>
#show-blogs{
  max-width: 802px;
  margin : 0 auto
}
  .single-blog{
    padding: 20px;
    margin: 20px 0 20px 0;
    background: #eee;

    box-sizing: border-box;
  }
</style>
