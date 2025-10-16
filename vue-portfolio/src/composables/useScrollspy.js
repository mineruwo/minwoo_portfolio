import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

export function useScrollspy(sectionRefs) {
  const activeSection = ref('hero'); // Default active section
  let observer;

  const setupObserver = () => {
    if (observer) {
      observer.disconnect(); // Disconnect previous observer if exists
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe all sections passed via sectionRefs
    for (const key in sectionRefs.value) {
      if (sectionRefs.value[key]) {
        observer.observe(sectionRefs.value[key]);
      }
    }
  };

  onMounted(() => {
    // Watch for changes in sectionRefs and re-setup observer
    watch(sectionRefs, setupObserver, { deep: true, immediate: true });
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    activeSection,
    setupObserver, // Expose setupObserver
  };
}