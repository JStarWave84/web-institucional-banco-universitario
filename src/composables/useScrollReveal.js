import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
  const el = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if (!el.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el, isVisible }
}
