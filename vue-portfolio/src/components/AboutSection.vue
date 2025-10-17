<script setup>
const skillCategories = [
  {
    name: '언어',
    skills: [
      { name: 'C', logo: 'c', color: '00599C' },
      { name: 'C++', logo: 'c%2B%2B', color: '00599C' },
      { name: 'C%23', logo: 'c-sharp', color: '239120' },
      { name: 'Java', logo: 'openjdk', color: 'ED8B00' },
      { name: 'JavaScript', logo: 'javascript', color: '323330', logoColor: 'F7DF1E' },
      { name: 'HTML5', logo: 'html5', color: 'E34F26' },
      { name: 'CSS3', logo: 'css3', color: '1572B6' },
    ]
  },
  {
    name: '프레임워크 & 라이브러리',
    skills: [
      { name: 'Spring', logo: 'spring', color: '6DB33F' },
      { name: 'SpringBoot', logo: 'springboot', color: '6DB33F' },
      { name: 'React', logo: 'react', color: '20232a', logoColor: '61DAFB' },
      { name: 'Vue.js', logo: 'vuedotjs', color: '4FC08D' },
      { name: 'Node.js', logo: 'nodedotjs', color: '339933' },

      { name: 'Flutter', logo: 'flutter', color: '02569B' },
      { name: 'Unity', logo: 'unity', color: '000000' },
    ]
  },
  {
    name: '데이터베이스',
    skills: [
      { name: 'MySQL', logo: 'mysql', color: '00f' },
      { name: 'PostgreSQL', logo: 'postgresql', color: '316192' },
      { name: 'Oracle', logo: 'oracle', color: 'F80000' },
      { name: 'MongoDB', logo: 'mongodb', color: '47A248' },
    ]
  },
  {
    name: '클라우드',
    skills: [
      { name: 'AWS', logo: 'amazon-aws', color: '232F3E' },
      { name: 'GCP', logo: 'google-cloud', color: '4285F4' },
      { name: 'Azure', logo: 'microsoft-azure', color: '0078D4' },
    ]
  },
  {
    name: '도구',
    skills: [
      { name: 'Git', logo: 'git', color: 'F05033' },
      { name: 'GitHub', logo: 'github', color: '181717' },
      { name: 'Jira', logo: 'jira', color: '0052CC' },
      { name: 'Trello', logo: 'trello', color: '0079BF' },
      { name: 'Confluence', logo: 'confluence', color: '172B4D' },
      { name: 'Bitbucket', logo: 'bitbucket', color: '0047B3' },
      { name: 'Figma', logo: 'figma', color: 'F24E1E' },
      { name: 'Visual Studio', logo: 'visual-studio', color: '5C2D91' },
      { name: 'VS Code', logo: 'visual-studio-code', color: '007ACC' },
      { name: 'Eclipse', logo: 'eclipse-ide', color: '2C2255' },
      { name: 'IntelliJ IDEA', logo: 'intellijidea', color: '000000' },
    ]
  }
];

const softSkills = [
  {
    name: '문제 해결',
    example: '프로젝트 중 발생한 X 문제 상황에서 Y 기술을 활용하여 Z 방식으로 해결한 경험이 있습니다.'
  },
  {
    name: '협업 및 의사소통',
    example: '팀원들과 효과적으로 소통하고 협력하여 프로젝트 목표를 달성한 경험이 있습니다.'
  },
  {
    name: '리더십',
    example: '프로젝트 팀장 경험을 바탕으로 팀을 이끌고 동기를 부여하며, 갈등을 조율한 경험이 있습니다.'
  },
  {
    name: '학습 민첩성',
    example: '새로운 기술과 개발 방법론을 빠르게 습득하고 적용한 경험이 있습니다.'
  },
  {
    name: '책임감',
    example: '주어진 업무에 대한 강한 책임감을 가지고 기한 내에 고품질의 결과물을 제공한 경험이 있습니다.'
  },
];

const growthLearning = [
  {
    name: '지속적인 학습',
    example: '최신 기술 트렌드와 개발 방법론을 탐구하며 끊임없이 배우고 성장합니다.'
  },
  {
    name: '문제 해결 능력',
    example: '새로운 도전에 직면했을 때, 효과적인 해결책을 찾기 위해 깊이 탐구하고 다양한 접근 방식을 시도합니다.'
  },
  {
    name: '적응력',
    example: '변화하는 개발 환경과 요구사항에 유연하게 적응하며, 새로운 기술 스택을 빠르게 습득합니다.'
  },
];
</script>

<template>
  <div class="content-container">
    <h2>배움에 두려움이 없는 풀스택 개발자 손민우입니다. </h2>
    <p>실무 경험과 프로젝트 리딩 경험을 바탕으로, 가치 있는 서비스를 만드는데 기여하겠습니다.</p>
    <p>저는 2년 반 동안 앱 개발자로 일하면서 같이 일하던 동료 개발자들의 프론트엔드와 백엔드 개발에 흥미를 느끼고 있었습니다. 이후 회사의 경영난으로 퇴사하게 되었고, 기존의 개발 스택을 넘어 새로운 분야에 도전하고 싶다는 열망이 커졌습니다. 그래서 과거 국비 지원으로 게임 개발을 배웠던 경험을 떠올리며, 풀스택 개발 과정을 수강하게 되었습니다.</p>
    <p>새로운 개발 스택인 Java, MySQL, React를 배우는 과정은 쉽지 않았지만, 프로젝트를 완성하고 배포했을 때 큰 성취감을 느꼈습니다. 특히 팀원을 위해 공용 프레임워크를 개발하고, 마이페이지와 관리자 페이지 기능을 구현해 성공적으로 배포한 순간, 개발의 진정한 즐거움을 다시금 깨달을 수 있었습니다.</p>
    <p>학원에서는 프로젝트 팀장으로서 팀원들의 코드 리뷰를 통해 코드 리딩 능력을 크게 향상시켰습니다. 또한, 일정 및 기능 분배와 조율을 통해 프로젝트를 성공적으로 이끌며 협업과 리더십의 중요성을 깊이 이해하는 계기가 되었습니다.</p>
    <p>저는 ‘주어진 일정 안에 안정적인 기능을 제공하는 것’이 진정한 프로 개발자의 핵심이라고 믿습니다. 이 원칙은 개발을 시작한 이후 스스로의 기준이자, 개발자로서 자부심의 원천이 되었습니다. 이러한 경험과 가치관을 바탕으로, 자사 프로젝트들이 안정적인 사용자 경험을 제공할 수 있도록 성능과 품질 개선에 기여하고 싶습니다. 앞으로도 개발자로서 꾸준히 성장하며, 팀과 함께 시너지를 내고 서비스 품질을 높이는 개발자가 되겠습니다.</p>
    <hr>
    <h3>기술 스택</h3>
    <div class="skill-categories">
      <div v-for="category in skillCategories" :key="category.name" class="skill-category-card">
        <h4>{{ category.name }}</h4>
        <div class="skill-list">
          <div v-for="skill in category.skills" :key="skill.name" class="skill-badge">
            <img :src="`https://img.shields.io/badge/${skill.name}-${skill.color}.svg?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logoColor || 'white'}`" :alt="skill.name">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h3>소프트 스킬</h3>
    <div class="soft-skills-container">
      <div v-for="skill in softSkills" :key="skill.name" class="soft-skill-card">
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-example">{{ skill.example }}</div>
      </div>
    </div>
    <hr>
    <h3>성장 및 학습</h3>
    <div class="growth-learning-container">
      <div v-for="item in growthLearning" :key="item.name" class="growth-learning-card">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-example">{{ item.example }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  color: var(--color-text);
  line-height: 1.6;
  padding-top: 4rem;
}

h2 {
  font-size: 2.5rem;
  border-bottom: 1px solid #444;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.skill-category-card {
  background-color: var(--color-background-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.skill-category-card h4 {
  font-size: 1.4rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge img {
  height: 28px; /* Adjust badge size as needed */
  width: auto;
  border-radius: 5px;
  transition: transform 0.2s ease;
}

.skill-badge img:hover {
  transform: scale(1.05);
}

table {
  border-collapse: collapse;
  width: 100%;
}

img {
  max-width: 100%;
  margin-right: 4px;
  margin-bottom: 4px;
}

hr {
  border: none;
  border-top: 1px solid #444;
  margin: 4rem 0;
}

.soft-skills-container,
.growth-learning-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.soft-skill-card,
.growth-learning-card {
  background-color: var(--color-background-soft);
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  min-height: 125px; /* Ensure cards have a minimum height */
}

.soft-skill-card:hover,
.growth-learning-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.soft-skill-card .skill-name,
.growth-learning-card .item-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;
}



.soft-skill-card .skill-example,
.growth-learning-card .item-example {
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  margin-top: 0.5rem; /* Add some space below the name */
}

.soft-skill-card:hover .skill-example,
.growth-learning-card:hover .item-example {
  opacity: 1;
  max-height: 100px; /* Adjust as needed to show full example */
}

a {
  color: var(--color-text);
  font-weight: bold;
}
</style>