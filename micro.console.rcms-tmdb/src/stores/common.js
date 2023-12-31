import { defineStore } from "pinia";

export const commonStore = defineStore("common", {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
