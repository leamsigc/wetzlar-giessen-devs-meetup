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
definePageMeta({
  layout: false,
  documentDriven: false,
})
</script>

<template>
  <main>
    <NuxtLayout layout="blog">
      <ContentDoc :path="$route.params.slug ? `/blogs/${$route.params.slug[0]}` : '/blogs'" :excerpt="true">
        <template #not-found>
          <page-not-found />
        </template>
      </ContentDoc>
    </NuxtLayout>
  </main>
</template>
