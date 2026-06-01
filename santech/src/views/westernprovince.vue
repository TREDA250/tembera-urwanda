<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-6">
      <h1 class="text-5xl font-bold text-center text-cyan-700 mb-8">
        Western Province
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
    name: "Lake Kivu",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "One of Africa's most beautiful freshwater lakes."
  },
  {
    name: "Kibuye",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    description: "A stunning lakeside town with island tours."
  },
  {
    name: "Karongi Islands",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    description: "Amazing islands and boat excursions."
  }
]
</script>