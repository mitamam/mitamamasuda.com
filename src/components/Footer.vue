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
}

.footer .container {
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
}

.footer span {
  display: block;
  width: 3rem;
  height: 1px;
  background-color: var(--main-color);
  margin-right: 0.5rem;
}

.footer p {
  font-family: 'Cormorant', serif;
  letter-spacing: 1.25px;
  font-size: 14px;
  color: var(--main-color);
}
</style>