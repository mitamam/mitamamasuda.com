<template>
  <div class="footer">
    <div class="container">
      <span></span>
      <p>© 2022</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.footer {
  width: 100%;
  height: 50px;
}

.footer .container {
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
}

.footer span {
  display: block;
  width: 4rem;
  height: 1px;
  background-color: var(--main-color);
  margin-right: 0.5rem;
}

.footer p {
  font-family: 'Cormorant', serif;
}
</style>