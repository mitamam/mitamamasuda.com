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
  margin-bottom: 4rem;
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
}

.about h6 {
  font-size: 16px;
  margin-bottom: 8px;
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
    font-size: 32px;
  }

}

@media only screen and (min-width: 905px) {
  .about p {
    font-size: 16px;
  }

  .about h3 {
    font-size: 40px;
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
