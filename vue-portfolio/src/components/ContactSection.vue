<template>
  <div class="content-container">
    <h2>✉️ 연락처 및 링크</h2>
    <p>잘 부탁드립니다.</p>
    <ul>
      <li><strong>Phone:</strong> 010-4950-3013</li>
      <li><strong>Email:</strong> mineruwo@gmail.com</li>
      <li><strong>GitHub:</strong> <a href="https://github.com/mineruwo" target="_blank" rel="noopener noreferrer">github.com/mineruwo</a></li>

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
