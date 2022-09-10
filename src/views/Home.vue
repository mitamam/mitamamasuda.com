<template>
  <div class="home">
    <div class="container">
      <h1>MITAMA MASUDA</h1>
      <div class="subheading"><img src="../assets/software_engineer.svg" alt="software engineer"></div>
      <p>I believe digital technology can solve big problems.</p>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="bubble">
        <p>This website emits of CO2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
