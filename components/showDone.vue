<template>
    <div>這裡有 {{ todoTasksCount }} 個已完成事項</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'show-completed',
  methods: {
    clearCompleted() {
      this.$store.dispatch('cleanAlldone') //dispatch直接呼叫store.js的mutation
    },
    computed: {
    ...mapGetters([
        'todoTasksCount',
    ])
  }
  }
}
</script>