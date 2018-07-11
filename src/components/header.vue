<template>
    <nav>
      <ul>
        <li><router-link to="/" exact > Blog </router-link></li>
        <li><router-link to="/add" exact > Add Blog </router-link></li>
        <li><router-link to="/list" exact > List Blog </router-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  background: #444;
  padding : 14px 0;
  margin-bottom: 40px;
}
  a{
    color : #fff;
    text-decoration: none;
    padding: 6px 8px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  ul{
    text-align: center;
    margin: 0;
    list-style-type: none;
  }
  .router-link-active{
    background: #eee;
    color: #444;
  }
</style>
