<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <div>Bar</div>
  <div>当前count: {{ user.count }}</div>
  <button m-2 rd bg-green px-4 py-1 color-white hover="op80" @click="user.addOne">
    +1
  </button>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
