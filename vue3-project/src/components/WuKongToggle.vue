<template>
  <div class="container">
    <p :class="{ isHighghLight: isHighghLight }">
      {{ isHighghLight ? '斗战胜佛' : '孙悟空' }}
    </p>
    <button @click="toggleClass">切换形态</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义 isHighghLight 类型为 boolean
const isHighghLight = ref<boolean>(false);

// 切换状态函数
const toggleClass = (): void => {
  isHighghLight.value = !isHighghLight.value;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100vh;  
  background-color: #f0f0f0;
}

p {
  font-size: 20px;
  color: #555;
  transition: color 0.3s ease; 
  margin-bottom: 20px;
}

.isHighghLight {
  color: #ff5722; 
  font-weight: bold;
  font-size: 24px; 
}

button {
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #303f9f;
}
</style>
