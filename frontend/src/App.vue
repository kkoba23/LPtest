<template>
  <div class="landing-page">
    <header class="header">
      <h1>ようこそ</h1>
      <p class="subtitle">ランディングページのサンプル</p>
    </header>

    <main class="main-content">
      <section class="hero">
        <h2>Vue3で構築されたランディングページ</h2>
        <p>このページはVue3とPythonローカルサーバーで動作しています。</p>
        <button class="cta-button">今すぐ始める</button>
      </section>

      <section class="features">
        <h3>特徴</h3>
        <div class="feature-grid">
          <div class="feature-card">
            <h4>Vue3</h4>
            <p>最新のVue3フレームワークを使用</p>
          </div>
          <div class="feature-card">
            <h4>Pythonサーバー</h4>
            <p>シンプルなローカルサーバー</p>
          </div>
          <div class="feature-card">
            <h4>レスポンシブ</h4>
            <p>モバイルフレンドリーなデザイン</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 ランディングページ</p>
    </footer>
  </div>
</template>

<script setup>
// コンポーネントロジックをここに追加できます
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.header h1 {
  font-size: 3rem;
  margin: 0;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.features {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.features h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.feature-card h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
}
</style>
