<script setup lang='ts'>
import { AppMain, NavBar, Settings, TagsView } from '@/layout/components'
</script>

<template>
  <div class='main-container'>
    <div>
      <NavBar />
      <TagsView />
    </div>
    <AppMain></AppMain>
  </div>
</template>

<style scoped></style>
