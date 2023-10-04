<script setup lang='ts'>
import { useTagsViewStore } from '@/stores/tagsView'

const tagsViewStore = useTagsViewStore()
</script>

<template>
  <div class='app-main'>
    <router-view v-slot='{ Component, route }'>
      <transition name='router-fade' mode='out-in'>
        <keep-alive :include='tagsViewStore.cachedViews'>
          <component :is='Component' :key='route.fullPath' />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang='less' scoped>
.app-main {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 50px);
  overflow: hidden;
  background-color: #409eff;
}
</style>
