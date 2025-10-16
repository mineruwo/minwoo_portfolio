<template>
  <div class="content-container">
    <h2>📚 프로젝트 (Projects)</h2>
    <h3 id="professional-projects" ref="professionalProjectsRef">실무 프로젝트 (Professional Projects)</h3>
    <div class="project-list">
      <div v-for="project in professionalProjects" :key="project.id" class="project-card">
        <div class="project-header" @click="toggleExpand(project)">
          <h3>{{ project.title }}</h3>
          <span class="expand-icon">{{ project.isExpanded ? '▲' : '▼' }}</span>
        </div>
        <transition name="expand">
          <div v-if="project.isExpanded" class="project-details">
            <ImageCarousel
              :images="project.images"
              :bannerText="project.bannerText"
              bannerTextColor="#ffffff"
              :interval="3000"
            />
            <p><strong>개요:</strong> {{ project.description }}</p>
            <p><strong>사용 기술:</strong>
              <code v-for="(tech, index) in project.techStack" :key="index">{{ tech }}</code>
            </p>
            <p v-if="project.link">
              <strong>자세히 보기:</strong> <a :href="project.link" target="_blank" rel="noopener noreferrer">링크</a>
            </p>
          </div>
        </transition>
      </div>
    </div>

    <h3 id="study-projects" ref="studyProjectsRef">학습 프로젝트 (Study Projects)</h3>
    <div class="project-list">
      <div v-for="project in studyProjects" :key="project.id" class="project-card">
        <div class="project-header" @click="toggleExpand(project)">
          <h3>{{ project.title }}</h3>
        </div>
        <transition name="expand">
          <div v-if="project.isExpanded" class="project-details">
            <ImageCarousel
              :images="project.images"
              :bannerText="project.bannerText"
              bannerTextColor="#ffffff"
              :interval="3000"
            />
            <p><strong>개요:</strong> {{ project.description }}</p>
            <p><strong>사용 기술:</strong>
              <code v-for="(tech, index) in project.techStack" :key="index">{{ tech }}</code>
            </p>
            <p v-if="project.link">
              <strong>자세히 보기:</strong> <a :href="project.link" target="_blank" rel="noopener noreferrer">링크</a>
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ImageCarousel from './ImageCarousel.vue'; // Import the new carousel component

const professionalProjectsRef = ref(null);
const studyProjectsRef = ref(null);

const projects = ref([
  {
    id: 'mirat-hair',
    type: 'professional',
    title: '💇‍♀️ Mirat (헤어 시뮬레이션)',
    link: 'https://www.mirart.co.kr/',
    description: 'Unity와 OpenCV를 활용한 헤어 시뮬레이션 서비스의 핵심 기능을 개발하고, 앱을 안정적으로 유지 보수했습니다.',
    techStack: ['Unity', 'OpenCV'],
    images: ['/img/placeholder-mirat-hair-1.jpg', '/img/placeholder-mirat-hair-2.jpg'],
    bannerText: 'Mirat Hair Simulation',
    isExpanded: false,
  },
  {
    id: 'mirat-beauty',
    type: 'professional',
    title: '💄 Mirat Beauty (반영구 시뮬레이션)',
    link: 'https://www.mirart.co.kr/',
    description: 'Unity와 Image Server API 통신을 이용한 반영구 시술 시뮬레이션 서비스를 개발하고 런칭 후 유지 보수를 담당했습니다.',
    techStack: ['Unity', 'Image Server API'],
    images: ['/img/placeholder-mirat-beauty-1.jpg', '/img/placeholder-mirat-beauty-2.jpg'],
    bannerText: 'Mirat Beauty Simulation',
    isExpanded: false,
  },
  {
    id: 'mirat-studio',
    type: 'professional',
    title: '📸 Mirat Studio (포토 스튜디오)',
    link: 'https://www.mirartstudio.kr/',
    description: 'Unity, OpenCV, CameraSDK 등을 활용하여 포토 스튜디오 서비스를 개발하고 국내외 런칭 및 유지 보수를 총괄했습니다.',
    techStack: ['Unity', 'OpenCV', 'Local ImageServer API', 'CameraSDK'],
    images: ['/img/placeholder-mirat-studio-1.jpg', '/img/placeholder-mirat-studio-2.jpg'],
    bannerText: 'Mirat Photo Studio',
    isExpanded: false,
  },
  {
    id: 'oshi-poster',
    type: 'professional',
    title: '✨ Oshi Poster (3D 포스터)',
    link: 'https://xrdive.net/oshiposter/',
    description: '3D Depth 카메라와 Unity, OpenCV를 이용한 3D 포스터 서비스를 개발했습니다.',
    techStack: ['Volt CameraSDK', 'Astra 3D depth CameraSDK', 'Unity', 'OpenCV'],
    images: ['/img/placeholder-oshi-poster-1.jpg', '/img/placeholder-oshi-poster-2.jpg'],
    bannerText: 'Oshi Poster 3D',
    isExpanded: false,
  },
  {
    id: 'mirat-app',
    type: 'professional',
    title: '📱 Mirat App (고객 관리 앱)',
    link: 'https://play.google.com/store/search?q=%EB%AF%B8%EB%9D%BC%ED%8A%B8&c=apps',
    description: '고객 관리를 위한 Mirat 연동 앱을 Unity와 UniWebView를 이용하여 개발 및 런칭했습니다.',
    techStack: ['Unity', 'UniWebView'],
    images: ['/img/placeholder-mirat-app-1.jpg', '/img/placeholder-mirat-app-2.jpg'],
    bannerText: 'Mirat Customer App',
    isExpanded: false,
  },
  {
    id: 'cargo-platform',
    type: 'study',
    title: '🚚 화물 운송 중개 플랫폼',
    link: 'https://docs.google.com/presentation/d/1-f2L11L-bgyGYkBMXS3jffJ7c0uVMkKS-1JRHorLUuo/edit?usp=sharing',
    description: '화물주와 차주를 연결하는 운송 중개 플랫폼을 기획하고 개발했습니다. 실시간 추적, 정산 등 핵심 기능을 구현했습니다.',
    techStack: ['Java', 'React', 'JavaScript', 'PostgreSQL', 'Supabase', 'Render'],
    images: ['/img/placeholder-cargo-1.jpg', '/img/placeholder-cargo-2.jpg'],
    bannerText: 'Cargo Platform',
    isExpanded: false,
  },
  {
    id: 'clothing-mall',
    type: 'study',
    title: '👕 의류 쇼핑몰 클론',
    link: 'https://docs.google.com/presentation/d/1Q1C6WtoUIJLVbGpRb6FffnpWh_nJckB9g26RgKeLu5o/edit?usp=sharing',
    description: '가상의 의류 쇼핑몰을 제작하여 실제 서비스와 가까운 UI/UX 및 기능 구현을 목표로 개발을 진행했습니다.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'VSCode'],
    images: ['/img/placeholder-clothing-1.jpg', '/img/placeholder-clothing-2.jpg'],
    bannerText: 'Clothing Mall Clone',
    isExpanded: false,
  },
  {
    id: 'untitled-goose',
    type: 'study',
    title: '🦆 Untitled Goose Game 모작',
    link: 'https://docs.google.com/presentation/d/1tFk5OIsFmb7sqxBz_EefUPv6yLcLnzJtOdg4nU9aWDc/edit?usp=sharing',
    description: 'Unity 엔진을 사용하여 \'Untitled Goose Game\'의 핵심 메커니즘인 퍼즐 및 잠입 플레이를 구현하는 모작 프로젝트를 진행했습니다.',
    techStack: ['Unity', 'C#', 'Git'],
    images: ['/img/placeholder-goose-1.jpg', '/img/placeholder-goose-2.jpg'],
    bannerText: 'Untitled Goose Game Clone',
    isExpanded: false,
  },
  {
    id: 'into-the-breach',
    type: 'study',
    title: '🤖 Into the Breach 모작',
    link: 'https://docs.google.com/presentation/d/1av6Px3jQs6zry_Fy-_HpJ-revbCaAJn1lAppDcN884k/edit?usp=sharing',
    description: 'Into the Breach\'의 타일 기반 전략 및 로그라이크 요소를 분석하고, Unity를 통해 1인 개발로 게임 시스템을 구현했습니다.',
    techStack: ['Unity', 'C#', 'Git'],
    images: ['/img/placeholder-breach-1.jpg', '/img/placeholder-breach-2.jpg'],
    bannerText: 'Into the Breach Clone',
    isExpanded: false,
  },
  {
    id: 'celeste',
    type: 'study',
    title: '🍓 Celeste 모작',
    link: 'https://docs.google.com/presentation/d/1kiEqAuKJ2osnIdRzIdB5Zn74QNlmbaswn0sxYewhOd8/edit?usp=sharing',
    description: 'SFML 라이브러리를 사용하여 \'Celeste\'의 정교한 플랫포머 물리 및 액션성을 구현하는 프로젝트를 팀원들과 함께 수행했습니다.',
    techStack: ['SFML', 'C++', 'Git'],
    images: ['/img/placeholder-celeste-1.jpg', '/img/placeholder-celeste-2.jpg'],
    bannerText: 'Celeste Clone',
    isExpanded: false,
  },
]);

const professionalProjects = computed(() => projects.value.filter(p => p.type === 'professional'));
const studyProjects = computed(() => projects.value.filter(p => p.type === 'study'));

const toggleExpand = (project) => {
  project.isExpanded = !project.isExpanded;
};

defineExpose({
  professionalProjectsRef,
  studyProjectsRef
});
</script>

<style scoped>
.content-container {
  color: var(--color-text);
  line-height: 1.6;
}

h2 {
  font-size: 2.5rem;
  border-bottom: 1px solid #444;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.project-card {
  background-color: var(--color-background-soft);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background-color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-border);
}

.project-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.expand-icon {
  font-size: 1.5rem;
  color: var(--color-text);
  transition: transform 0.3s ease;
}

.project-header:hover .expand-icon {
  transform: rotate(180deg);
}

.project-details {
  padding: 1.5rem;
  background-color: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
}

.project-details p {
  margin-bottom: 1rem;
}

.project-details code {
  background-color: #444;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.project-details a {
  color: var(--color-text);
  font-weight: bold;
}

/* Expand Transition */
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to, .expand-leave-from {
  max-height: 500px; /* Adjust based on max content height */
  opacity: 1;
}
</style>
