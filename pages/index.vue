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
const blogs = await queryContent('blogs').limit(5).find()
const { data } = await useAsyncData('hero', () =>
  queryContent('_partials', '_hero').findOne(),
)

useHead({
  ...data.value.head,
  title: data.value.title,
})
definePageMeta({
  documentDriven: false,
  layout: 'home',
})
</script>

<template>
  <main>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" unwrap="p" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
    <div class="container p-y-10 px-4 xl:px-unset">
      <div class="grid md:grid-cols-3 gap-4 gap-y-8 lg:gap-y-4 ">
        <article
          v-for="blog in blogs" :key="blog._path"
          class="rounded p-unset  relative flex flex-col transition transform-gpu lg:hover:scale-110  shadow dark:bg-gray-700 dark:text-white"
        >
          <picture
            v-if="blog.image" class="" :src="blog.image.src" quality="80"
            rounded :img-attrs="{ class: 'object-cover   w-full h-full' }"
          >
            <source :srcset="blog.image.src" media="(min-width: 600px)">
            <img
              object-cover w-full h-full :src="blog.image.src" :alt="blog.title" height="600"
              width="600" loading="lazy" decoding="async"
            >
          </picture>
          <div class="px-2 pt-2 flex flex-col flex-1">
            <h2 text-lg font-bold uppercase text-gray-400>
              {{ blog.title }}
            </h2>
            <p class=" text-base my-3 flex-1 opacity-55 ">
              {{ blog.description }}
            </p>
          </div>
          <Nuxt-link :to="blog._path" class="  hover:bg-transparent hover:text-green hover:shadow-none px-4 py-2">
            Read More
          </Nuxt-link>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
