<template>
  <div class="box">
    <div class="container">
      <h2 style="padding: 20px 0;">知乎热榜</h2>
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="img">
          <img :src="item.banner" alt="">
        </div>
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>
            <span style="margin-right: 10px">{{ item.updated }}</span>
            <span>{{ item.viewCount }}次浏览</span>
          </p>
        </div>
        <div>
          <span v-if="item.isFollowing === 'TRUE'" class="followed">已关注</span>
          <span v-else class="follow">关注</span>
        </div>
      </div>
      <div class="togglePage">
        <button
          @click="prevPage"
          :disabled="isFirstPage"
          :class="{ disabled: isFirstPage }"
        >上一页</button>
        <button
          @click="nextPage"
          :disabled="isLastPage"
          :class="{ disabled: isLastPage }"
        >下一页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

interface Special {
  id: string;
  title: string;
  banner: string;
  introduction: string;
  isFollowing: string;
  followersCount: number;
  viewCount: number;
  updated: string;
}

const list = ref<Special[]>([]);
const limit = ref<number>(3);
const offset = ref<number>(0);
const total = ref<number>(0);

// 请求分页接口
const fetchByPage = async (): Promise<void> => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/special/page`, {
      params: {
        limit: limit.value,
        offset: offset.value
      }
    });
    list.value = response.data.data.specials;
    total.value = response.data.data.total;
  } catch (err) {
    console.error(err);
  }
};

const nextPage = (): void => {
  if (offset.value + limit.value < total.value) {
    offset.value += limit.value;
    fetchByPage();
  }
};

const prevPage = (): void => {
  if (offset.value > 0) {
    offset.value -= limit.value;
    fetchByPage();
  }
};

const isFirstPage = computed(() => offset.value === 0);
const isLastPage = computed(() => offset.value + limit.value >= total.value);

onMounted(() => {
  fetchByPage();
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh; /* 确保 body 高度为视口高度 */
  background-color: #f5f5f5; /* 背景色 */
}

.box {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 宽度为100% */
  height: 100vh; /* 高度为视口高度 */
  box-sizing: border-box; /* 包含内边距和边框在宽度和高度计算中 */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%; /* 使容器宽度为100% */
  max-width: 1200px; /* 最大宽度 */
  height: 90vh; /* 高度为视口高度的90% */
  border-radius: 8px; /* 圆角 */
  overflow: hidden; /* 隐藏溢出部分 */
  box-sizing: border-box; /* 包含内边距和边框在宽度和高度计算中 */
  padding: 20px; /* 内边距 */
  position: relative; /* 为 .togglePage 的绝对定位提供参考 */
}

.title {
  padding: 20px 0;
  font-size: 24px;
  color: #333;
}

.item {
  display: flex;
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 阴影 */
  border-radius: 8px; /* 圆角 */
  transition: transform 0.2s ease-in-out; /* 过渡效果 */
  width: 100%; /* 宽度为100% */
  box-sizing: border-box; /* 包含内边距和边框在宽度计算中 */
}

.item:hover {
  transform: scale(1.02); /* 鼠标悬停放大效果 */
}

.img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img img {
  display: block;
  max-width: 100%;
  height: auto; /* 保持图片比例 */
  border-radius: 8px; /* 图片圆角 */
}

.content {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.followed {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  color: #666;
  background-color: #f0f0f0;
}

.follow {
  border: 1px solid #1e90ff;
  padding: 5px 10px;
  border-radius: 5px;
  color: #1e90ff;
  background-color: #f0f8ff; /* 更柔和的背景色 */
}

button {
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out; /* 过渡效果 */
}

button:hover {
  background-color: #1c86ee; /* 鼠标悬停时的颜色 */
  transform: scale(1.05); /* 鼠标悬停放大效果 */
}

button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.togglePage {
  position: absolute;
  bottom: 20px; /* 距离底部20px */
  text-align: center;
  width: 100%; /* 宽度为100% */
  box-sizing: border-box; /* 包含内边距和边框在宽度计算中 */
}

</style>
