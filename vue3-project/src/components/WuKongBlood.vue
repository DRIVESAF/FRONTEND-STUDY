<template>
  <div class="container">
    <p>血量：{{ Math.round(discountedBlood) }}/{{ blood }}</p>
    
    <!-- 进度条容器 -->
    <div class="progress-bar">
      <div 
        class="progress"
        :style="{ width: progressWidth + '%', backgroundColor: discountedBlood < blood * 0.2 ? 'red' : 'green' }">
      </div>
    </div>

    <!-- 滚动条 -->
    <input type="range" v-model="discount" min="0" max="1" step="0.01" />
    <p>当前扣血百分比: {{ Math.round(discount * 100) }}%</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 定义初始血量类型为 number
const blood = ref<number>(100)

// 定义扣血百分比类型为 number
const discount = ref<number>(0.8)

// 计算扣血后的血量，类型为 number
const discountedBlood = computed<number>(() => {
  return blood.value * discount.value
})

// 计算进度条的宽度百分比，类型为 number
const progressWidth = computed<number>(() => {
  return (discountedBlood.value / blood.value) * 100
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress {
  height: 100%;
  transition: width 0.3s ease, background-color 0.3s ease;
}

input[type="range"] {
  width: 100%;
  margin-top: 20px;
}
</style>
