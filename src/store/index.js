import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
  color: "red",
});

const methods = {
  increase() {
    state.count++;
  },

  decrease() {
    state.count--;
  },

  setColor(payload) {
    state.color = payload;
  },
};

export default {
  state: readonly(state),
  methods,
};
