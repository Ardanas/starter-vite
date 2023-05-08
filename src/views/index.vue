

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
      >
        Vitesse
      </a>
    </p>
    <button icon-btn title="模式" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
      模式按钮
    </button>
    <div py-4 />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: "IndexPage",
});

const router = useRouter();
</script>
<route lang="yaml">
meta:
  layout: default
</route>
