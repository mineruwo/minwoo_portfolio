<template>
  <div class="image-carousel">
    <div class="carousel-images">
      <img :src="images[currentIndex]" :alt="`Project Image ${currentIndex + 1}`" class="carousel-image" />
      <div v-if="currentBannerText" class="carousel-banner" :style="{ color: bannerTextColor }">
        {{ currentBannerText }}
      </div>
    </div>

    <button @click="prevImage" class="carousel-arrow left-arrow">&#10094;</button>
    <button @click="nextImage" class="carousel-arrow right-arrow">&#10095;</button>

    <div class="carousel-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToImage(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 5000, 
  },
  bannerText: {
    type: [String, Array],
    default: () => [],
  },
  bannerTextColor: {
    type: String,
    default: '#ffffff',
  },
});

const currentIndex = ref(0);
let autoSlideInterval = null;

const currentBannerText = computed(() => {
  if (Array.isArray(props.bannerText)) {
    return props.bannerText[currentIndex.value] || '';
  }
  return props.bannerText;
});

const startAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  autoSlideInterval = setInterval(() => {
    nextImage();
  }, props.interval);
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const goToImage = (index) => {
  currentIndex.value = index;
  startAutoSlide(); 
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});

watch(() => props.images, startAutoSlide);
watch(() => props.interval, startAutoSlide);
</script>

<style scoped>
.image-carousel {
  position: relative;
  width: 100%;
  max-width: 600px; 
  margin: 0 auto 1.5rem auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.carousel-images {
  display: flex;
  width: 100%;
  height: 350px; 
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease-in-out;
}

.carousel-banner {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6); 
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.carousel-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 50px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.carousel-indicators span {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5); 
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicators span.active {
  background-color: white;
}
</style>
