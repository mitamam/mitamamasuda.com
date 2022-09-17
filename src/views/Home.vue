<template>
  <div class="home">
    <div class="container">
      <h1>MITAMA MASUDA</h1>
      <div class="subheading"><img src="../assets/software_engineer.svg" alt="software engineer"></div>
      <p>I believe digital technology can solve big problems.</p>
      <ul>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/work">WORK</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
      <div class="bubble">
        <p>This website emits 0.49g of CO2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  width: 100%;
  flex: 1;
}

.home .container {
  color: var(--main-color);
  padding: 80px 0;
  text-align: center;
}

.home h1 {
  font-size: 2.5rem;
  letter-spacing: 0.25px;
  font-weight: normal;
  z-index: 0;
}

.home .subheading {
  width: 14rem;
  margin: 0 auto;
  margin-top: -1.8rem;
  z-index: 1;
}

.home .subheading > img {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.home p {
  font-size: 0.85rem;
  font-family: 'Cormorant', serif;
}

.home .subheading + p {
  margin-bottom: 3rem;
  letter-spacing: 0.25px;
}

.home li {
  font-size: 2rem;
  padding: 0.8rem 0;
  letter-spacing: 0.15px;
}

.bubble {
  position: fixed;
  z-index: 2;
  bottom: 2rem;
  right: 2rem;
  width: 4.3rem;
  height: 4.3rem;
  padding: .8rem .4rem;
  border: 1px solid var(--main-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubble p {
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Cormorant', serif;
}

@media only screen and (min-width: 600px) {
  .home .subheading {
    width: 18rem;
  }

  .home li {
    font-size: 40px;
  }
}
</style>
