<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Hero Section -->
    <section class="relative h-[70vh]">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Rwanda"
        class="w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-7xl font-bold mb-4">
            Rwanda Gallery
          </h1>

          <p class="text-xl max-w-2xl mx-auto">
            Explore the beauty of Rwanda through stunning landscapes,
            wildlife, culture, and unforgettable adventures.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-4">
          Photo Gallery
        </h2>

        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover Rwanda's breathtaking destinations, wildlife,
          lakes, mountains, and vibrant culture.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1549366021-9f761d450615"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div class="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
              class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="bg-green-700 text-white py-16">
      <div class="container mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 class="text-5xl font-bold">100+</h3>
            <p class="mt-2">Tourist Sites</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">3</h3>
            <p class="mt-2">National Parks</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">1M+</h3>
            <p class="mt-2">Visitors</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">5</h3>
            <p class="mt-2">Provinces</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">

        <h2 class="text-5xl font-bold text-gray-800 mb-6">
          Experience Rwanda Yourself
        </h2>

        <p class="text-lg text-gray-600 mb-8">
          Visit the Land of a Thousand Hills and create memories that last forever.
        </p>

        <button
          class="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition"
        >
          Plan Your Visit
        </button>

      </div>
    </section>

  </div>
</template>

<script setup>
// No script needed
</script>    