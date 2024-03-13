import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    // state 返回一个函数，该函数返回一个对象
    state: () => ({
        name: 'John Doe',
        age: 30,
    }),
    // actions 用于定义修改状态的方法
    actions: {
        updateName(newName) {
            this.name = newName;
        },
        increaseAge() {
            this.age += 1;
        },
    },
    // getters 用于定义基于现有状态的计算属性
    getters: {
        userNameWithAge: (state) => `${state.name} (${state.age})`,
    },
});