<template>
  <div class="about">
    <div class="container">
      <h2>ABOUT ME</h2>
      <div class="about-content">
        <div class="about-img"><img src="../assets/about_img.jpg"></div>
        <div class="about-text">
          <h3>Mitama Masuda</h3>
          <p>
            2001年群馬県生まれ。東京都在住。<br><br>
            都内の大学に在学中に42Tokyoに入学し、<br>
            プログラミングの楽しさに目覚める。<br>
            その後42Tokyoでコンピューターサイエンスの基礎を学び、複数のインターンに参加。<br><br>
            環境問題に強い関心があり、環境に優しい開発をモットーに、環境問題の解決に役立つプロダクトの開発や環境負荷の少ないシステム設計を目指している。
          </p>
          <p>
            Born in 2001 in Gunma, Japan.<br>
            Lives in Tokyo.<br>
            I enrolled in 42 Tokyo in 2021,<br>
            and discovered the joy of programming.<br>
            After that, I learned the basics of computer science and participated in several internships.<br>
            I have a strong interest in environmental issues and aim to develop products that help solve such problems.<br>
            I develop design systems with less environmental impact, based on environmentally friendly development.
          </p>
          <h6>Skills</h6>
          <p>C, C++, Python, HTML, CSS, Vue.js</p>
          <h6>Tools</h6>
          <p>Git, VSCode, Unix, Linux, Virtual Box, Figma</p>
          <div class="resume">
            <a class="resume-btn" href="./mitama_masuda_resume(english).pdf" target="_blank"><span>ENGLISH RESUME</span></a>
            <a class="resume-btn" href="./mitama_masuda_resume(japanese).pdf" target="_blank"><span>JAPANESE RESUME</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.about {
  width: 100%;
  flex: 1;
}

.about .container {
  color: var(--main-color);
  padding: 48px 0;
}

.about .about-content {
  display: flex;
  flex-direction: column;
}

.about .about-img {
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 48px;
  max-width: 400px;
  height: 100%;
  text-align: center;
}

.about .about-img > img {
  width: 100%;
  height: 100%;
}

.about h3 {
  font-size: 1.7rem;
  font-weight: normal;
  margin-bottom: 16px;
}

.about p {
  font-size: 14px;
  letter-spacing: 0.25px;
  margin-bottom: 32px;
  font-family: 'Noto Sans JP', sans-serif;
}

.about h6 {
  font-size: 16px;
  margin-bottom: 8px;
}

.about .resume {
  display: flex;
  gap: 16px;
}

.about .resume-btn {
  position: relative;
  display: inline-block;
  border: 1px solid var(--main-color);
  background: var(--bg-color);
  padding: 10px 16px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  text-align: center;
  touch-action: manipulation;
  text-rendering: geometricprecision;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
}

.about .resume-btn:before {
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background-color: var(--main-color);
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
}

.resume-btn:hover {
  color: var(--bg-color);
}

.resume-btn:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.resume-btn:after {
  background-color: #FFFFFF;
}

.resume-btn span {
  z-index: 1;
  position: relative;
}

@media only screen and (min-width: 600px) {
  .about .about-content {
    flex-direction: row-reverse;
    justify-content: space-between;
    column-gap: 32px;
  }

  .about .container {
    padding: 64px 0;
  }

  .about .about-img {
    flex: 1;
    padding: 0;
    margin: 0;
    max-width: none;
  }

  .about .about-text {
    flex: 1;
  }

  .about h3 {
    font-size: 24px;
  }

  .about p {
    font-size: 14px;
  }

}

@media only screen and (min-width: 905px) {
  .about p {
    font-size: 16px;
  }

  .about h3 {
    font-size: 28px;
  }

  .about h6 {
    font-size: 20px;
  }

  .about .about-content {
    column-gap: 64px;
  }
}

@media only screen and (min-width: 1240px) {
  .about .about-content {
    column-gap: 120px;
  }
}
</style>
