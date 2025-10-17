<template>
  <div class="content-container">
    <h2>경력 사항 (Work Experience)</h2>
    <div class="career-card">
      <h3>㈜ 미러로이드 (2022.10 ~ 2025.01)</h3>
      <p><strong>프로그램 개발 및 유지보수</strong></p>
      <ul>
        <li>[업무 내용 1]</li>
        <li>[업무 내용 2]</li>
        <li>[업무 내용 3]</li>
      </ul>
    </div>
    <div class="career-card">
      <h3>주식회사 메타엠 (2019.05 ~ 2020.08)</h3>
      <p><strong>배틀그라운드 C/S 및 운영 담당</strong></p>
      <ul>
        <li>[업무 내용 1]</li>
        <li>[업무 내용 2]</li>
      </ul>
    </div>
    <div class="career-card">
      <h3>㈜ 시너지컨설팅 (2017.06 ~ 2017.12)</h3>
      <p><strong>블리자드 코리아 C/S 및 운영 담당</strong></p>
      <ul>
        <li>[업무 내용 1]</li>
        <li>[업무 내용 2]</li>
      </ul>
    </div>
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

.career-card {
  background-color: var(--color-background-soft); /* Light background for the card */
  border-radius: 8px; /* Rounded corners */
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.career-card h3 {
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.career-card p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--color-text-light);
}

.career-card ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.career-card li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

strong {
  font-weight: bold;
}
</style>
