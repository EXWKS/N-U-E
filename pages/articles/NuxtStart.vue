<template>
    <div class="background">
        <div class="blog-container">
            <h1 class="title">Nuxt 3 初期設定手順</h1>
            <div class="blog-text">
                <p class="command">npx nuxi init my-nuxt-app</p>
                <p class="text">すると <span class="highlight">Which package manager would you like to use?</span> と訊かれるので
                    <span class="highlight">npm</span> を選択。
                </p>
                <p class="text">そのあと <span class="highlight">Initialize git repository?</span> と訊かれるので <span
                        class="highlight">Yes</span> を選択（GitHubを利用するので）。</p>
                <p class="text">そのあと <span class="highlight">Would you like to install any of the official modules</span>
                    ときかれるが、特に今回は不要なので何も選択しない。</p>
                <p class="text">プロジェクトができあがるので、</p>
                <p class="command">cd my-nuxt-app</p>
                <p class="command">npm install</p>
                <p class="command">npm run dev</p>
                <p class="text">これで <a href="http://localhost:3000" target="_blank" class="link">http://localhost:3000/</a>
                    にWebブラウザでアクセスする。</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
// 特別なJSは不要
</script>
  
<style scoped>
.background {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
}

.background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/common/top_bg_pic.webp');
    background-size: cover;
    background-position: center;
    animation: glitch 1s infinite, colorShift 5s infinite, lines 0.1s infinite;
    z-index: -2;
}

.background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
}

.blog-container {
    background-color: #000;
    color: #fff;
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    border: 2px solid #00ffcc;
    border-radius: 16px;
    box-shadow: 0 0 20px #00ffcc88;
    animation: fadeIn 1s ease-in-out;
}

.blog-text {
    text-align: left;
}

.title {
    font-size: 2rem;
    color: #ff66cc;
    border-bottom: 2px solid #ff66cc;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
}

.command {
    background: #333333;
    color: #00ffcc;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-left: 4px solid #ff66cc;
}

.text {
    margin: 1rem 0;
    line-height: 1.6;
}

.highlight {
    color: #ff66cc;
    font-weight: bold;
}

.link {
    color: #00ffcc;
    text-decoration: underline;
    transition: color 0.3s;
}

.link:hover {
    color: #ff66cc;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes colorShift {
    0% {
        filter: hue-rotate(0deg);
    }

    50% {
        filter: hue-rotate(180deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}
</style>
  