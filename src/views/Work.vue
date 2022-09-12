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
  padding: 3rem 0;
}

.work-heading {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
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

.work li {
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid var(--main-color);
}

.work li > h4 {
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.work li > p {
  font-size: 0.9rem;
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

</style>