import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  eidted: null,
  task: "",
  tasks: [
    {
      title: "task1",
      status: "Done",
    },
    {
      title: "task2",
      status: "In-progress",
    },
    {
      title: "task3",
      status: "To-Do",
    },
  ],
});

export const mutations = {
  updateField,
  add(state, task) {
    if (task.length === 0) return;
    if (state.eidted === null) {
      state.tasks.unshift({
        title: task,
        status: "To-Do",
      });
    } else {
      state.tasks[state.eidted].title = task;
      task = "";
      state.eidted = null;
    }
  },
  del(state, id) {
    state.tasks.splice(id, 1);
  },
  editTask(state, id) {
    state.task = state.tasks[id].title;
    state.eidted = id;
  },
  changeStatus(state, id) {
    //目前沒用到
    let newIndex = state.availablesStatus.indexOf(state.tasks[id].status); //等號右邊是從availablesStatus找出跟tasks[id]裡一樣的值的index
    //indexOf只能用再arrary跟string
    if (++newIndex > 2) newIndex = 0; //如果newIndex=3超過availablesStatus就從index=0開始
    state.tasks[id].status = state.availablesStatus[newIndex]; //把目前的狀態變成newIndex對應availablesStatus的值
  },
  removeAlldone(state) {
    state.tasks = state.tasks.filter((tasks) => tasks.status != "Done"); //把未完成的filter出來留著
  },
  removeTask(state) {
    state.tasks = [];
  },
  toDone(state, id) {
    state.tasks[id].status = "Done";
  },
  toDo(state, id) {
    state.tasks[id].status = "To-Do";
  },
  inprogress(state, id) {
    state.tasks[id].status = "In-progress";
  },
};

export const actions = {
  add({ commit }, task) {
    commit("add", task);
  },
  cleanAlldone({ commit }) {
    commit("removeAlldone");
  },
  removeTask({ commit }) {
    commit("removeTask");
  },
};

export const getters = {
  getField,
  todoTasksCount: (state) => {
    return state.tasks.filter((tasks) => tasks.status != "Done").length;
  },
  alltasks: (state) => state.tasks,
};
