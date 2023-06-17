<template>
  <div class="home">
    <div class="container">
      <h1>MITAMA MASUDA</h1>
      <div class="subheading"><img src="../assets/software_developer.svg" alt="software engineer"></div>
      <p>I believe digital technology can solve big problems.</p>
      <ul>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/work">WORK</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
      <div class="bubble">
        <p>This website emits 0.1g of CO2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  flex: 1;
  width: 100%;
}

.home .container {
  color: var(--main-color);
  padding: 40px 0;
  text-align: center;
}

.home h1 {
  font-size: 48px;
  letter-spacing: 0.25px;
  font-weight: normal;
  z-index: 0;
}

.home .subheading {
  width: 16rem;
  margin: 0 auto;
  margin-top: -1.2rem;
  z-index: 1;
}

.home .subheading > img {
  width: 100%;
  height: 100%;
  display: inline-block;
  filter: invert(18%) sepia(18%) saturate(610%) hue-rotate(347deg)
    brightness(98%) contrast(88%);
}

body.dark-mode .home .subheading > img {
  filter: invert(98%) sepia(4%) saturate(4857%) 
    hue-rotate(296deg) brightness(116%) contrast(86%);
}

.home p {
  font-size: 12px;
  font-family: 'Cormorant', serif;
}

.home .subheading + p {
  font-style: italic;
  margin-bottom: 3rem;
  letter-spacing: 0.25px;
}

.home ul {
  display: flex;
  flex-direction: column;
}

.home li {
  font-size: 2rem;
  padding: 0.8rem 0;
  letter-spacing: 0.15px;
}

.home li a {
  transition: 0.2s;
}

.home li a:hover {
  color: #A2917E;
}

.bubble {
  position: fixed;
  z-index: 2;
  bottom: 2rem;
  right: 2rem;
  width: 70px;
  height: 70px;
  padding: 12px 4px;
  border: 1px solid var(--main-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubble p {
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Cormorant', serif;
}

@media only screen and (min-width: 600px) {
  .home .container {
    padding: 120px 0;
  }

  .home h1 {
    font-size: 2rem;
  }

  .home .subheading {
    width: 13rem;
  }

  .home p {
    font-size: 0.6rem;
  }

  .home li {
    font-size: 36px;
  }

  .bubble {
    width: 100px;
    height: 100px;
    padding: 16px 12px;
  }

  .bubble p {
    font-size: 14px;
  }
}

@media only screen and (min-width: 905px) {
  .home ul {
    flex-direction: row;
    justify-content: center;
  }

  .home li {
    margin: 0 64px;
    padding: 0;
    position: relative;
  }

  .home li:nth-child(n+2)::before {
    width: 1px;
    height: 32px;
    border-left: 1px solid var(--main-color);
    content: "";
    position: absolute;
    top: 8px;
    left: -64px;
  }
}
</style>
