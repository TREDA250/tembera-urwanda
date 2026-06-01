<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-6">
      <h1 class="text-5xl font-bold text-center text-purple-700 mb-8">
        Kigali City
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
    name: "Kigali Convention Centre",
    image: "src/assets/convesion.jpg  ",
    description: "Iconic architectural landmark of Kigali."
  },
  {
    name: "Kigali Genocide Memorial",
    image: "src/assets/memorial.jpg ",
    description: "A place of remembrance and education."
  },
  {
    name: "Nyandungu Eco Park",
    image: "src/assets/nyandungu.jpg",
    description: "Urban wetland eco-tourism destination."
  }
]
</script>