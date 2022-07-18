<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
</script>

<template>
  <section class="section-sponsors">
    <div class="container">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <p class="subtitle" >
        <slot name="description"></slot>
      </p>
     <p class="subtitle">
      <slot name="subTitle"></slot>
      </p>
      <div class="container-sponsors">
        <img
          class="sponsors-logos"
          src="/sponsors/reflectMedia.png"
          alt="Reflect medialogo"
        >
        <img class="sponsors-logos" src="/sponsors/atlasian.png" alt="atlasian">
        <img
          src="/sponsors/digitalOcean.png"
          alt="Digital ocean"
          class="sponsors-logos"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sponsors {
  padding: 4rem 0 6rem;
  background: url("/SponsorBg.svg") no-repeat center center / 70%,
    var(--secondary-color);
}

.title {
  margin-bottom: 2rem;
}
.container-sponsors {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-gap: 2rem;
}
.sponsors-logos {
  display: block;
  max-height: 80px;
  width: 100%;
}
.bg {
  background: var(--textbg-color);
  color: var(--secondary-color);
}
</style>
