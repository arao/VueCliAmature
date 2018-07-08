<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue'
export default {
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
