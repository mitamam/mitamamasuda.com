<template>
  <div class="about">
    <div class="container">
      <h2>ABOUT ME</h2>
      <div class="about-img"><img src="../assets/about_img.jpg"></div>
      <h3>Mitama Masuda</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharet
        ratellus et sollicitudin suscipit. Pellentesque vel consectetur sem, sed
        eleifend risus.In posuere volutpat ante. Morbi non leo massa. Maecenas d
        ignissim nibh nisl, in consequat lacus finibus ornare. Aliquam diam leo,
         tincidunt ac metus ac, lacinia ullamcorper nisl.Donec maximus tortor a 
         tortor vulputate dapibus.</p>
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
  padding: 3rem 0;
}

.about .about-img {
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 4rem;
  max-width: 400px;
  text-align: center;
}

.about .about-img > img {
  width: 100%;
  height: 100%;
}

.about h3 {
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 1rem;
}

.about p {
  font-size: 0.9rem;
  letter-spacing: 0.25px;
}
</style>
