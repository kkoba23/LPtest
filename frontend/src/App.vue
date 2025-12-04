<template>
  <div class="landing-page">
    <header class="header animate-on-scroll fade-in-up">
      <h1>ようこそ</h1>
      <p class="subtitle">スクロールで魅せるランディングページ</p>
    </header>

    <main class="main-content">
      <section class="hero animate-on-scroll fade-in-up">
        <h2>Vue3で構築された<br>ランディングページ</h2>
        <p>スクロールに合わせて美しくアニメーションする体験を</p>
        <button class="cta-button">今すぐ始める</button>
      </section>

      <section class="parallax-section">
        <div class="parallax-bg"></div>
        <div class="parallax-content animate-on-scroll fade-in-up">
          <h2>スムーズなスクロール体験</h2>
          <p>Apple風のエレガントなアニメーションを実現</p>
        </div>
      </section>

      <section class="features">
        <h3 class="animate-on-scroll fade-in-up">特徴</h3>
        <div class="feature-grid">
          <div class="feature-card animate-on-scroll fade-in-up" style="animation-delay: 0.1s">
            <div class="icon">📱</div>
            <h4>Vue3</h4>
            <p>最新のVue3フレームワークを使用</p>
          </div>
          <div class="feature-card animate-on-scroll fade-in-up" style="animation-delay: 0.2s">
            <div class="icon">🚀</div>
            <h4>パフォーマンス</h4>
            <p>高速で滑らかなアニメーション</p>
          </div>
          <div class="feature-card animate-on-scroll fade-in-up" style="animation-delay: 0.3s">
            <div class="icon">✨</div>
            <h4>レスポンシブ</h4>
            <p>モバイルフレンドリーなデザイン</p>
          </div>
        </div>
      </section>

      <section class="showcase animate-on-scroll scale-in">
        <h2>洗練されたデザイン</h2>
        <div class="showcase-grid">
          <div class="showcase-item animate-on-scroll slide-in-left">
            <div class="showcase-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></div>
            <h3>美しいグラデーション</h3>
            <p>目を引く色彩設計</p>
          </div>
          <div class="showcase-item animate-on-scroll slide-in-right">
            <div class="showcase-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"></div>
            <h3>モダンなレイアウト</h3>
            <p>直感的なユーザー体験</p>
          </div>
        </div>
      </section>

      <section class="cta-section animate-on-scroll fade-in-up">
        <h2>さあ、始めましょう</h2>
        <p>今すぐあなたのプロジェクトに取り入れてください</p>
        <button class="cta-button large">無料で始める</button>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 ランディングページ</p>
    </footer>
  </div>
</template>

<script setup>
import { useScrollAnimation } from './composables/useScrollAnimation'
import { onMounted } from 'vue'

useScrollAnimation()

// パララックス効果
onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const parallaxBg = document.querySelector('.parallax-bg')
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* ヘッダー */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
}

.header h1 {
  font-size: 4rem;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  font-weight: 300;
}

/* メインコンテンツ */
.main-content {
  flex: 1;
}

/* ヒーローセクション */
.hero {
  text-align: center;
  padding: 8rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #1d1d1f;
  font-weight: 700;
  line-height: 1.2;
}

.hero p {
  font-size: 1.5rem;
  color: #6e6e73;
  margin-bottom: 3rem;
  font-weight: 300;
}

.cta-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.cta-button.large {
  padding: 1.5rem 4rem;
  font-size: 1.3rem;
}

/* パララックスセクション */
.parallax-section {
  position: relative;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-bg {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 800px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  z-index: 0;
}

.parallax-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
}

.parallax-content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.parallax-content p {
  font-size: 1.5rem;
  font-weight: 300;
}

/* 特徴セクション */
.features {
  max-width: 1200px;
  margin: 8rem auto;
  padding: 0 2rem;
}

.features h3 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #1d1d1f;
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.feature-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.feature-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.feature-card p {
  color: #6e6e73;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* ショーケースセクション */
.showcase {
  max-width: 1200px;
  margin: 8rem auto;
  padding: 0 2rem;
  text-align: center;
}

.showcase h2 {
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #1d1d1f;
  font-weight: 700;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
}

.showcase-item {
  text-align: center;
}

.showcase-image {
  width: 100%;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.showcase-item h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1d1d1f;
  font-weight: 600;
}

.showcase-item p {
  font-size: 1.2rem;
  color: #6e6e73;
}

/* CTAセクション */
.cta-section {
  text-align: center;
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-top: 4rem;
}

.cta-section h2 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta-section p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-section .cta-button {
  background: white;
  color: #667eea;
}

.cta-section .cta-button:hover {
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);
}

/* フッター */
.footer {
  background: #1d1d1f;
  color: white;
  text-align: center;
  padding: 3rem;
}

/* アニメーション定義 */
.animate-on-scroll {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.is-visible {
  opacity: 1;
}

/* フェードインアップ */
.fade-in-up {
  transform: translateY(50px);
}

.fade-in-up.is-visible {
  transform: translateY(0);
}

/* スケールイン */
.scale-in {
  transform: scale(0.9);
}

.scale-in.is-visible {
  transform: scale(1);
}

/* スライドインレフト */
.slide-in-left {
  transform: translateX(-100px);
}

.slide-in-left.is-visible {
  transform: translateX(0);
}

/* スライドインライト */
.slide-in-right {
  transform: translateX(100px);
}

.slide-in-right.is-visible {
  transform: translateX(0);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  .parallax-content h2 {
    font-size: 2rem;
  }

  .features h3,
  .showcase h2,
  .cta-section h2 {
    font-size: 2rem;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-image {
    height: 300px;
  }
}
</style>
