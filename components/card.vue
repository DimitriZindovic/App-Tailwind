<template>
  <div
    class="flex justify-between flex-col border border-border_tag rounded-lg p-3 gap-3 h-[210px]"
  >
    <div class="flex flex-1 justify-between items-center">
      <h4 class="text-2xl font-semibold">{{ text }}</h4>
      <Ellipsis />
    </div>
    <div class="flex gap-2">
      <Item v-for="(item, index) in items" :key="index" :title="item.title" />
    </div>
    <p class="text-text_gray">Created on 12.27.2024</p>
    <p>254 products</p>
  </div>
</template>

<script>
import Item from "./item.vue";
import { Ellipsis } from "lucide-vue-next";

export default {
  components: {
    Item,
    Ellipsis,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
