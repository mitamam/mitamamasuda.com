<template>
  <div class="about">
    <div class="container">
      <h2>ABOUT ME</h2>
      <div class="about-content">
        <div class="about-img"><img src="../assets/about_img.jpg"></div>
        <div class="about-text">
          <h3>Mitama Masuda</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharet
            ratellus et sollicitudin suscipit. Pellentesque vel consectetur sem, sed
            eleifend risus.In posuere volutpat ante. Morbi non leo massa. Maecenas d
            ignissim nibh nisl, in consequat lacus finibus ornare. Aliquam diam leo,
            tincidunt ac metus ac, lacinia ullamcorper nisl.Donec maximus tortor a 
            tortor vulputate dapibus.</p>
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
    margin: 32px 0;
  }

  .about p {
    font-size: 16px;
  }
}

@media only screen and (min-width: 905px) {
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
