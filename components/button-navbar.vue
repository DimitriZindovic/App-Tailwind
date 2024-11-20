<template>
  <button
    class="flex items-center justify-center bg-button_blue text-white p-3 rounded-md gap-2"
  >
    <SquarePlus class="h-5 w-5" />
    <p>{{ text }}</p>
  </button>
</template>
<script>
import { SquarePlus } from "lucide-vue-next";

export default {
  components: {
    SquarePlus,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
