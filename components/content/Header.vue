<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <img src="/logo/DuckLogo.svg" alt="Wetzlar developers logo">
      </div>
      <nav class="nav">
        <ul class="nav--ul">
          <li class="nav--li">
            <router-link class="nav--link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav--li">
            <router-link class="nav--link" to="/about">
              About
            </router-link>
          </li>
          <li class="nav--li">
            <router-link class="nav--link" to="/about">
              Sponsor Us
            </router-link>
          </li>
          <li class="nav--li">
            <a href="#" class="btn btn-main">Join slack</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: var(--main-color);
  padding: 1rem;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}
.logo-container {
  text-align: left;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container img {
  display: block;
  max-height: 100px;
}
.nav {
  flex: 4;
}
.nav .nav--ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
}
.nav .nav--li {
  display: inline-block;
}
.nav .nav--link {
  color: var(--secondary-color);
  text-decoration: none;
  padding: 1rem;
}
</style>
