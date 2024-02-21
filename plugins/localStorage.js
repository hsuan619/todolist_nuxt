//新增記憶功能，引入套件

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) =>{
  window.onNuxtReady(() => {
    createPersistedState({
      key: "store",
    })(store)
  })
}