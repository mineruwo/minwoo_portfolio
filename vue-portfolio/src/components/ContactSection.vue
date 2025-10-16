ㅅ<template>
  <div class="content-container">
    <h2>✉️ 컨텍트</h2>
    <p>이곳에 연락 정보를 작성합니다.</p>
    <!-- Add your contact information here -->
    <ul>
      <li><strong>Email:</strong> your.email@example.com</li>
      <li><strong>GitHub:</strong> <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">github.com/your-github</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin</a></li>
    </ul>
  </div>
</template>

<script setup>
// No script needed for now
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: var(--color-text);
  font-weight: bold;
}
</style>
