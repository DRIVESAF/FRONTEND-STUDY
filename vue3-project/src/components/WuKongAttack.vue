<template>
    <div class="attack-calculator">
        <div class="input-group">
            <label for="base-attack">基础攻击力:</label>
            <input id="base-attack" v-model="baseAttack" type="number" class="input">
        </div>

        <div class="input-group">
            <label for="gear-bonus">装备加成：</label>
            <input id="gear-bonus" v-model="gearBonus" type="number" class="input">
        </div>

        <p class="total-attack">总攻击力：<span>{{ totalAttack }}</span></p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// 为 baseAttack 和 gearBonus 指定 number 类型
const baseAttack = ref<number>(50)
const gearBonus = ref<number>(20)

// 计算总攻击力
const totalAttack = computed<number>(() => baseAttack.value + gearBonus.value)
</script>

<style scoped>
.attack-calculator {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f9fc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-family: Arial, sans-serif;
}

label {
    font-weight: bold;
    color: #333;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.input {
    width: 100px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.total-attack {
    font-size: 18px;
    font-weight: bold;
    color: #1a73e8;
    text-align: center;
}

.total-attack span {
    color: #ff5722;
}
</style>
