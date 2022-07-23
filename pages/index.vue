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
    <div class="container p-y-10 px-4 lg:px-unset">
      <div class="grid md:grid-cols-4 gap-4 gap-y-8 lg:gap-y-4">
        <article
          v-for="blog in blogs"
          :key="blog._path"
          class="rounded p-unset py-1 px-3 text-white relative bg-gray-900 flex flex-col transition transform-gpu lg:hover:scale-110 h-52"
        >
          <h3 text-lg font-bold>
            {{ blog.title }}
          </h3>
          <p class="text-gray-300 text-base mb-4 text-xs flex-1">
            {{ blog.description }}
          </p>
          <Nuxt-link :to="blog._path" class=" btn hover:bg-transparent hover:text-green hover:shadow-none ">
            Read More
          </Nuxt-link>
          <picture
            v-if="blog.image"
            class="image-container -z-10"
            opacity="10"
            :src="blog.image.src"
            quality="80"
            rounded
            :img-attrs="{ class: 'object-cover absolute inset-0 w-full h-full' }"
          >
            <source :srcset="blog.image.src" media="(min-width: 600px)">
            <img
              object-cover
              absolute
              inset-0
              w-full
              h-full
              :src="blog.image.src"
              :alt="blog.title"
              height="600"
              width="600"
              loading="lazy"
              decoding="async"
            >
          </picture>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
