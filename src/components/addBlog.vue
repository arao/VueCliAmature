<template>
  <div id="add-blog">
    <h2>Add a new Blog Post</h2>
    <form v-if="!submitted" >
      <label> Blog Title :</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label > Blog Content :</label>
      <input type="text" v-model.lazy="blog.content" required>

      <div id="checkboxes">
        <label > Ninjas</label>
        <input type="checkbox" v-model="blog.categories" value="ninjas">
        <label > Wizard</label>
        <input type="checkbox" v-model="blog.categories" value="wizard">
        <label > Mario</label>
        <input type="checkbox" v-model="blog.categories" value="mario">
        <label > Cheese</label>
        <input type="checkbox" v-model="blog.categories" value="cheese">
      </div>

      <label > Author :</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author.name}}</option>
      </select>

      <button v-on:click.prevent="post()">Add Blog</button>
    </form>
    <h3 v-if="submitted">
      Thanks for submitting blog
    </h3>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title : {{blog.title}} </p>
      <p>Blog Content :</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories : </p>
      <ul>
        <li v-for="category in blog.categories"> {{category}} </li>
      </ul>
      <p>Author : {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addBlog",
      data(){
          return{
            blog: {
              title: "",
              content: "",
              categories:[],
              author:""
            },
            authors:[{name:'The Net Ninja', default:false},
              {name:'The Angular Avenger', default:true},
              {name:'The Vue Vindicator', default:false}
              ],
            submitted: false
          }
      },
      methods:{
          post(){
            this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              userId:1,
              title: this.blog.title,
              body: this.blog.content,
            }).then((data)=>{
              this.submitted = true;
              console.log(data);
            })
          }
      }
    }
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label{
    display: inline-block;
  }
</style>
