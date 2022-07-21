<template>
  <main>
    <ContentDoc :path="$route.params.slug ? `/blogs/${$route.params.slug[0]}` : '/blogs'">
      <template #not-found>
        <page-not-found />
      </template>
    </ContentDoc>
  </main>
</template>
