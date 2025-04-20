<template>
    <div class="hero">
        <div class="hero-content">
            <h1 class="title">Articles3</h1>
            <NuxtLink to="articles/NuxtStart">
                <p class="cta-button">Nuxtの導入</p>
            </NuxtLink>
            <NuxtLink to="articles/NuxtGithubPages">
                <p class="cta-button">NuxtをGuthubPageにアップ</p>
            </NuxtLink>
        </div>
    </div>
</template>
  
<script setup>

const base = useRuntimeConfig().app.baseURL

</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>
  
<style scoped>
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-family: sans-serif;
}

.hero::before {
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
    z-index: -1;
}

.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.hero-content {
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    z-index: 2;
}

.title {
    font-size: 3em;
    margin-bottom: 20px;
    color: #00ffcc;
}

.cta-button {
    padding: 15px 30px;
    background-color: #00ffcc;
    border: none;
    color: #000;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #ff66cc;
}

/* 色の変化 */
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
  