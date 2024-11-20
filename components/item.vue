<template>
  <div class="bg-bg_tag border border-tag rounded px-2.5 py-0.5 w-fit">
    <p class="text-xs">{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
