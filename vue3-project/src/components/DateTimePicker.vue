<template>
    <input 
      type="date" 
      :value="modelValue" 
      @input="onDateInput" 
    />
    <input 
      type="time" 
      :value="timeValue" 
      @input="onTimeInput" 
    />
  </template>
  
  <script setup lang="ts">
  // 定义 props
  const props = defineProps({
    modelValue: String,
    timeValue: String
  })
  
  // 定义 emits
  const emit = defineEmits(['update:modelValue', 'update:timeValue'])
  
  // 处理日期输入
  const onDateInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      emit('update:modelValue', target.value);
    }
  }
  
  // 处理时间输入
  const onTimeInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      emit('update:timeValue', target.value);
    }
  }
  </script>
  