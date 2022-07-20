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
import Meetup from '~~/components/content/Meetup.vue'
const blogs = await queryContent('blogs').limit(5).find()
const { data } = await useAsyncData('hero', () =>
  queryContent('_partials', '_hero').findOne(),
)
definePageMeta({
  layout: 'home',
  documentDriven: false,
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
    <div class="container p-y-10">
      <div class="grid md:grid-cols-4 gap-4">
        <article
          v-for="blog in blogs"
          :key="blog._path"
          class="rounded p-unset py-1 px-3 text-white relative bg-gray-900 flex flex-col transition transform-gpu hover:scale-110"
        >
          <h3>{{ blog.title }}</h3>
          <p class="text-gray-300 text-base mb-4 text-xs flex-1">
            {{ blog.description }}
          </p>
          <Nuxt-link :to="blog._path" class="bg-gray-500 px-3 py-2">
            Read More
          </Nuxt-link>
          <picture
            v-if="blog.image"
            class="image-container -z-10"
            opacity="50"
            :src="blog.image.src"
            quality="80"
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
