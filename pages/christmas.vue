<template>
  <div class="flex">
    <div class="bg-bg_soft_blue sm:w-fit sm:h-screen p-6">
      <h1
        class="bg-gradient-to-r from-gradient_purple to-gradient_pink inline-block text-transparent bg-clip-text uppercase font-black text-5xl tracking-wider pr-10"
      >
        TAILWIND
      </h1>
    </div>
    <div class="gap-3 p-4">
      <div class="flex items-center">
        <ArrowLeft class="text-text_gray" />
        <p class="text-text_gray">Back</p>
        <h3 class="text-2xl font-semibold">Christmas 2024</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { ArrowLeft } from "lucide-vue-next";

export default {
  components: {
    ArrowLeft,
  },
};
</script>
