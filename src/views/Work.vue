<template>
  <div class="work">
    <div class="container">
      <div class="work-heading">
        <span></span>
        <h2>WORK</h2>
      </div>
      <ul>
        <li>
          <h4>Ecroute</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ph
            aretra tellus et sollicitudin suscipit. Pellentesque vel consectetur
             sem, sed eleifend risus.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
        <li>
          <h4>Ecroute</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ph
            aretra tellus et sollicitudin suscipit. Pellentesque vel consectetur
             sem, sed eleifend risus.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
        <li>
          <h4>Ecroute</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ph
            aretra tellus et sollicitudin suscipit. Pellentesque vel consectetur
             sem, sed eleifend risus.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
}
</script>

<style>
.work {
  width: 100%;
  flex: 1;
}

.work .container {
  color: var(--main-color);
  padding: 48px 0;
}

.work-heading {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}

.work span {
  width: 3rem;
  height: 1px;
  background-color: var(--main-color);
}

.work h2 {
  margin-bottom: 0;
  margin-left: 1.5rem;
}

.work ul {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  row-gap: 32px;
}

.work li {
  padding: 1rem;
  border: 1px solid var(--main-color);
}

.work li > h4 {
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.work li > p {
  font-size: 14px;
  max-width: calc(100% - 3rem);
}

.work li:last-child {
  margin-bottom: 0;
}

.work .github-link {
  text-align: right;
}

.work .fa-github {
  font-size: 1.5rem;
}

@media only screen and (min-width: 600px) {
  .work .container {
    padding: 64px 0;
  }

  .work .work-heading {
    margin-bottom: 48px;
  }

  .work li {
    max-width: 560px;
    margin: 0 auto;
  }

  .work li > h4 {
    font-size: 32px;
  }

  .work li > p {
    font-size: 16px;
  }
}

@media only screen and (min-width: 905px) {
  .work ul {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  .work li {
    margin: 0;
  }
}

</style>