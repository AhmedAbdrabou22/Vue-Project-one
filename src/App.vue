<template>
  <navbarcomponents/>
  <router-view/>
</template>


<script>
  import navbarcomponents from './components/navbarcomponent.vue'
  import adventure from './components/adventure.vue'
  import splitcomponents from './components/splitscomponent.vue'
  import featuretours from './components/featuretours.vue'
    export default {
      data(){
        return {

        }
      },

      components: {navbarcomponents ,adventure,splitcomponents,featuretours},
    }
</script>


<style>

</style>
