<template>
    <input :value="modelValue" @input="onInput" />
  </template>
  
  <script setup lang="ts">
  // 接收 modelValue 作为输入框的值
  const props = defineProps({
    modelValue: String
  });
  
  // 触发事件
  const emit = defineEmits(['update:modelValue']);
  
  // 处理输入事件
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      emit('update:modelValue', target.value);
    }
  };
  </script>
  