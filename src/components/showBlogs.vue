<template >
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Article</h1>
    <input type="text" v-model="search" class="search-bar" placeholder="search blogs">
    <div v-for="blog in filterBlogs" class="single-blog">
        <h2 v-rainbow> {{blog.title | to-uppercase}}</h2>
        <article>{{blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
    export default {
      name: "showBlogs",
      data(){
        return {
          blogs :[],
          search:""
        }
      },
      methods:{

      },
      computed:{
        filterBlogs(){
            return this.blogs.filter((blog)=>{
            return blog.title.includes(this.search);
          })
        }
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
      },
      filters:{
        'to-uppercase':(value)=>{
          return value.toUpperCase();
        },
        'snippet': (value)=> {
          return value.slice(0, 100) + '...';
        }
      },
      directives:{
        'rainbow': {
          bind(el, binding, vnode) {
            el.style.color = "#" + Math.random().toString().slice(2, 8);
          }
        },
        'theme': {
          bind(el, binding, vnode) {
            if (binding.value == 'wide') {
              el.style.maxWidth = '1200px';
            } else if (binding.value == "narrow") {
              el.style.maxWidth = '800px';
            }

            if (binding.arg == 'column') {
              el.style.background = '#ddd';
              el.style.padding = '20px';
            }
          }
        }
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
  .search-bar{
    position: relative;
    left : 100%;
    transform: translateX(-100%);
  }
</style>
