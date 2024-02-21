<template>
    <div class="container">
        <el-button type="primary" size="small" @click="removeAll" class="but btn reducefontsize btn-outline-danger">清除全部</el-button>
        <el-button type="primary" size="small" @click="clearCompleted" class="but btn reducefontsize">清除已完成</el-button>
    </div>
</template>

<script>
export default {
  name: 'todo-clear-completed',
  methods: {
    clearCompleted() {
      this.$store.dispatch('cleanAlldone') //dispatch直接呼叫store.js的mutation
    },
    removeAll(){
      this.$store.dispatch('removeTask')
    }
  }
}
</script>

<style>
.container{
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.but{
  cursor: pointer;
  margin:10px;
  margin-top: 50px;
}

</style>