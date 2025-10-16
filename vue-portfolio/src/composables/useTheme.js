import { ref, onMounted } from 'vue';

export function useTheme() {
  const theme = ref('light');

  const applyTheme = (newTheme) => {
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    theme.value = newTheme;
  };

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  });

  return {
    theme,
    toggleTheme,
  };
}
