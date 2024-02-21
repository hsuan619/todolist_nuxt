
<template>
  <el-table :data="alltasks">
    <el-table-column
    prop="title" 
    label="事項"
    width="180"
    >
    </el-table-column>
<el-table-column
    prop="status" 
    label="狀態"
    width="180">
      
    </el-table-column>
    <el-table-column
    
    label="控制"
    width="180">
    <template slot-scope="scope">
      <el-button class="pointer" @click="editTask(scope.$index, alltasks)" icon="el-icon-edit" circle></el-button>
      <el-button class="pointer" @click="del(scope.$index, alltasks)" icon="el-icon-delete" circle></el-button>
    </template>
    </el-table-column>
    <el-table-column
    label="變更狀態"
    width="180">
    <template slot-scope="scope">
      <el-button-group>
      <el-button @click="toDo(scope.$index, alltasks)" type="todo" size="mini" icon="el-icon-view"></el-button>
      <el-button @click="done(scope.$index, alltasks)" type="done" size="mini" icon="el-icon-check"></el-button>    
      <el-button @click="progress(scope.$index, alltasks)" type="in" size="mini" icon="el-icon-setting"></el-button>    
      </el-button-group>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
    }
  },
    create(){
      this.alltasks = JSON.parse(localStorage.getItem(key) || '[]')
  },
  mounted(){
    if (localStorage.getItem('alltasks')) {
        this.alltasks = JSON.parse(localStorage.getItem('alltasks'));
      }
     if (localStorage.getItem('del')) this.del = JSON.parse(localStorage.getItem('del'));
  },
  computed: {
    ...mapGetters([
      'alltasks',
    ]),
  },
  
  methods: {
    del(id){
    this.$store.commit('del', id)
    },
    editTask (id) {
      this.$store.commit('editTask', id)
      
    },
    done(id){
      this.$store.commit('toDone', id)
    },
    toDo(id){
      this.$store.commit('toDo', id)
    },
    progress(id){
      this.$store.commit('inprogress', id)
      
    }
  }
}
</script>

<style scoped>

.el-button--done{
  background-color: #c8f0ba;
  color: rgb(9, 95, 38);
  border-color: aliceblue;
}
.el-button--todo{
  background-color: #fec3c4;
  color: darkred;
  border-color: aliceblue;
}
.el-button--in{
  background-color: #f9fec3;
  border-color: aliceblue;
  color: #f1c604;
}

</style>
