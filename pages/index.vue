<template>
  <main>
    <div class="container" style="margin-top:100px"><h1>My ToDoList</h1></div>
      <inputTask/>
      <tasksbody/>
      <clean/>
      <!-- <showdone/> -->
      <Cleandone/>
    <!-- <nuxt-link to="/AllDone"> All - Done </nuxt-link> -->
  </main>
  
</template>

<script> 
import inputTask from '@/components/input.vue'
import tasksbody from '@/components/body.vue'
import clean from '@/components/clean.vue'
import Cleandone from '@/components/done.vue'
//import showdone from '@/components/showDone.vue'




export default {
  name: 'IndexPage',
  components: {
    inputTask,
    tasksbody,
    clean,
    Cleandone,
    //showdone
    
  }
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center; 
    align-items: center; 
}
</style>