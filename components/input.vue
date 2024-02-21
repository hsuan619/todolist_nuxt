<template>
    <div class="container">
        <el-input class="enterbar" clearable size="medium" v-model="task" type="text"  placeholder="輸入待辦事項"  @keyup.enter.native="add()"></el-input>
        <el-button type="done" round @click="add()">新增</el-button>
    </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default ({
  name: 'App',
  data(){
    return {
    }
  },

  computed: {
    ...mapFields([
    'task'
    ]),
  },

  methods: {
    add(){
      this.$store.dispatch('add', this.task)
      this.task = ''
    },
  }               
})
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.enterbar{
  width: 50%;
  flex-wrap: nowrap;
  font-size: 16pt;
  margin: 50px;
}
.el-button--done{
  background-color: #c8f0ba;
  color: rgb(9, 95, 38);
  border-color: aliceblue;
  text-align: center;
  font-weight: 1000;
}

</style>