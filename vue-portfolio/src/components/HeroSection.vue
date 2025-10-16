<template>
  <div class="hero-content">
    <div class="profile-picture-wrapper">
      <a href="https://github.com/mineruwo" target="_blank" rel="noopener noreferrer">
              <img src="/img/profile.jpeg" alt="Profile Picture" class="profile-picture" />      </a>
    </div>
    <h1>손민우</h1>
    <p class="tagline">배움에 두려움이 없는 풀스택 개발자</p>
    <div class="cta-buttons">
      <a href="#projects" class="button primary">프로젝트 보기</a>
      <a href="/files/이력서_손민우.pdf" target="_blank" download="이력서_손민우.pdf" class="button secondary">이력서 다운로드</a>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 60px); /* Full viewport height minus header */
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
}

.profile-picture-wrapper {
  position: relative;
  width: 225px;
  height: 225px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid var(--color-text);
  overflow: visible; /* Allow shadow to spread outside */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse-shadow 2.5s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-delay: 2s;
}

@keyframes pulse-shadow {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-text-rgb), 0.7);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(var(--color-text-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-text-rgb), 0);
  }
}

.profile-picture {
  width: 100%; /* Fill the wrapper */
  height: 100%; /* Fill the wrapper */
  border-radius: 50%;
  object-fit: cover;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.tagline {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.button.primary {
  background-color: #42b883; /* Vue Green */
  color: #ffffff;
  border: 1px solid #42b883;
}

.button.primary:hover {
  background-color: #369f70;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button.secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-text);
}

.button.secondary:hover {
  background-color: var(--color-text);
  color: var(--color-background);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
