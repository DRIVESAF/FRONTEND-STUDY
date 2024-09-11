<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 使用 TypeScript 为 ref 声明类型
const name = ref<string>('孙悟空')
const title = ref<string>('齐天大圣')
const description = ref<string>('在《西游记》中，孙悟空是一个勇敢无畏、机智聪明的角色，以其强大的能力和不屈的精神著称。')
</script>

<style scoped>
h2 {
  font-size: 24px;
  color: #ff5722; 
  margin-bottom: 10px; 
}

h3 {
  font-size: 20px;
  color: #f9cd4a;
  margin-bottom: 8px; 
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin-top: 0; 
}

div {
  padding: 20px;
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
