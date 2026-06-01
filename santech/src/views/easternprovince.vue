<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-6">
      <h1 class="text-5xl font-bold text-center text-yellow-600 mb-8">
        Eastern Province
      </h1>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="place in destinations"
          :key="place.name"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          <img :src="place.image" class="h-60 w-full object-cover" />
          <div class="p-5">
            <h2 class="text-2xl font-bold mb-2">{{ place.name }}</h2>
            <p class="text-gray-600">{{ place.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const destinations = [
  {
    name: "Akagera National Park",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    description: "Rwanda's Big Five safari destination."
  },
  {
    name: "Lake Muhazi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "A peaceful lake ideal for relaxation and boating."
  },
  {
    name: "Gahini",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Beautiful landscapes and cultural experiences."
  }
]
</script>