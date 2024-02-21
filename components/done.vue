<template>
    <div class="container">
      <span class="other"><b>還有{{todoTasksCount}}項未完成</b></span>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'other',
  computed: {
    ...mapGetters([
        'todoTasksCount',
    ])
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.other{
  margin:10px;
}

</style>