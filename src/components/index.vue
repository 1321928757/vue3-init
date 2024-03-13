<script setup>
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const changeUserName = () => {
  userStore.updateName("Jane Doe");
};
</script>

<template>
  <div>
    <p>{{ userStore.userNameWithAge }}</p>
    <button @click="changeUserName">Change User Name</button>
  </div>
</template>
