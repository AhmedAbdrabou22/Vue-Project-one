<template>
  <navbarcomponents/>
  <router-view/>
</template>


<script>
  import navbarcomponents from './components/navbarcomponent.vue'
  import adventure from './components/adventure.vue'
    export default {
      data(){
        return {

        }
      },

      components: {navbarcomponents ,adventure},
    }
</script>


<style>

</style>
