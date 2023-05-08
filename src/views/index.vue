<script setup lang="ts">
defineOptions({
  name: "IndexPage",
});
// const count = defineProp(0)

const router = useRouter();
</script>

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

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">你的名称</label>

    <div>
      <button m-3 text-sm btn :disabled="!name" @click="go">go</button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>