<template>
  <div>
    <app-header v-bind:title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue'
export default {
  /*
  lifecycle sequence
  new vue()
  -----------------> beforeCreated           :: does not have access to data and other functions
  observe data
  init events
  -----------------> created
  ::template and data created
  ----------------->beforeMount
  mount dom
  ----------------->mounted
  mounted
  if change
  -------------> beforeUpdate
  apply update
  -------------> updated
  call destroy
  -----------------> beforeDestroy
  teardown and call destroy
  ----------------->destroyed

   */

  components:{
    'app-header':Header,
    'app-ninjas': Ninjas,
    'app-footer':Footer
  },
  data(){
    return{
      ninjas:[
        {name: 'Ryu', speciality:"Vue Components", show: false},
        {name: 'Crystal', speciality:"HTML Wizardry", show: false},
        {name: 'Hitoshi', speciality:"Click Event", show: false},
        {name: 'Tango', speciality:"Conditional", show: false},
        {name: 'Kami', speciality:"WebPack", show: false},
        {name: 'Yoshi', speciality:"Data Diggin", show: false}
      ],
      title: "Vue Ninjas"
    }
  },
  methods:{
    updateTitle(newTitle){
      this.title = newTitle;
    }
  }
}
</script>

<style scoped>

</style>
