<template>
  <h1>技能列表</h1>
  <ul>
    <li v-for="skill in skills" :key="skill.id">
      {{ skill.name }} - 
      <span v-if="skill.lock" style="color: red;">未解锁</span>
      <span v-else style="color: green;">已解锁</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义技能的类型
interface Skill {
  id: number;
  name: string;
  lock: boolean;
}

// 使用技能类型定义技能数组
const skills = ref<Skill[]>([
  { id: 1, name: '筋斗云', lock: false },
  { id: 2, name: '七十二变', lock: false },
  { id: 3, name: '火眼金睛', lock: true }
]);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.skills-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

li {
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
}

li:last-child {
  border-bottom: none;
  text-align: center;
}

.locked {
  color: red;
}

.unlocked {
  color: green;
}
</style>
