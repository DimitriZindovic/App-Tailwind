<template>
  <div class="sm:flex">
    <div class="bg-bg_soft_blue sm:w-fit sm:h-screen p-6">
      <h1
        class="bg-gradient-to-r from-gradient_purple to-gradient_pink inline-block text-transparent bg-clip-text uppercase font-black sm:text-5xl text-4xl tracking-wider pr-10"
      >
        TAILWIND
      </h1>
    </div>
    <div class="flex-1">
      <div class="p-4 border-b border-bg_soft_blue">
        <div class="flex items-center justify-between">
          <h3 class="text-3xl">My Catalogs</h3>
          <button-navbar text="Create Catalog" />
        </div>
      </div>
      <div class="grid sm:grid-cols-3 gap-3 px-4 pt-8">
        <CardButton />
        <NuxtLink to="/christmas"
          ><Card text="Christmas 2024" :items="items"
        /></NuxtLink>
        <Card
          text="A very big title for a catalog with many thing"
          :items="names"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./components/card.vue";
import CardButton from "./components/card-button.vue";

export default {
  components: {
    Card,
    CardButton,
  },
  data() {
    return {
      items: [{ title: "Sneakers" }, { title: "boots" }],
      names: [
        { title: "Sneakers" },
        { title: "boots" },
        { title: "Belt" },
        { title: "Socks" },
        { title: "+3" },
      ],
    };
  },
};
</script>
