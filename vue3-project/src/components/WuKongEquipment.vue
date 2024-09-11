<template>
  <div class="equipment-container">
    <input
      type="text"
      v-model="newEqName"
      placeholder="请输入装备名称"
      @keyup.enter="addEquipment"
    />
    <div class="button-container">
      <button @click="addEquipment">添加装备</button>
    </div>
    <ul>
      <li v-for="(equipment, index) in equipmentName" :key="index" class="equipment-item">
        {{ equipment.name }}
        <button @click="dele(index)" class="delete-btn">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义装备类型
interface Equipment {
  name: string;
}

// 声明类型
const newEqName = ref<string>('');
const equipmentName = ref<Equipment[]>([]);

// 添加装备函数
const addEquipment = (): void => {
  if (newEqName.value.trim()) {
    equipmentName.value.push({ name: newEqName.value });
    newEqName.value = '';
  }
};

// 删除装备函数
const dele = (index: number): void => {
  equipmentName.value.splice(index, 1);
};
</script>

<style scoped>
.equipment-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #eee;
  border-radius: 10px;
  background-color: #f9f9f9;
}

input[type="text"] {
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: flex-end; /* 让按钮靠右对齐 */
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  padding: 0;
}

.equipment-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
}

.delete-btn {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #e53935;
}
</style>
