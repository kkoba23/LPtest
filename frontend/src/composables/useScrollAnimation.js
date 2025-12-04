import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const initScrollAnimation = () => {
    // Intersection Observer のオプション
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // 10%表示されたらトリガー
    }

    // コールバック関数
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }

    // オブザーバーを作成
    observer = new IntersectionObserver(callback, options)

    // アニメーション対象の要素を監視
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))
  }

  onMounted(() => {
    initScrollAnimation()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimation
  }
}
