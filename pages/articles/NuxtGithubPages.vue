<template>
    <div class="background">
        <div class="blog-container">
            <h1 class="title">Nuxt3 GithubPagesデプロイ</h1>
            <div class="blog-text">
                <p class="text">gh-pagesをインストール</p>
                <p class="command">npm install gh-pages --save-dev</p>
                <p class="command">
                    "scripts": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"deploy": "gh-pages -d dist"<br>
                    }
                </p>
                <p class="text">GithubのRepository > settings > Pages > Branch </p>
                <p class="text">でgh-pagesを選択</p>
                <p class="text">その後、</p>
                <p class="command">npm run generate</p>
                <p class="text">し、dist/を作成</p>
                <p class="command">npm run deploy</p>
                <p class="text">でgithub Pagesにアップする</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
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
    animation: glitch 1s infinite, colorshift 5s infinite, lines 0.1s infinite;
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
    white-space: pre;
}

.code-block {
    background-color: #111;
    color: #00ffcc;
    padding: 1rem;
    border-radius: 6px;
    font-family: monospace;
    white-space: pre;
    overflow-x: auto;
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
    transition: color 0.3s
}

.link:hover {
    color: #ff66cc
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    fo {
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
        filter: hue-rotate(360deg)
    }
}
</style>