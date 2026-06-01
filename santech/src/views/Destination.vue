<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Hero Section -->
    <section class="relative h-[80vh]">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Rwanda"
        class="w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-7xl font-bold mb-6">
            Discover Rwanda
          </h1>

          <p class="text-xl max-w-3xl mx-auto">
            Explore breathtaking landscapes, wildlife adventures,
            rich culture and unforgettable experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Title -->
    <section class="py-16">
      <div class="container mx-auto px-6">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-4">
          Popular Destinations
        </h2>

        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Rwanda offers unique experiences ranging from mountain gorillas
          and national parks to beautiful lakes and vibrant city life.
        </p>

        <!-- Destinations Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Volcanoes -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-green-600 font-semibold">
                Northern Province
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Volcanoes National Park
              </h3>
              <p class="text-gray-600 mt-3">
                Home to the endangered mountain gorillas and stunning volcanoes.
              </p>
            </div>
          </div>

          <!-- Akagera -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1549366021-9f761d450615"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-yellow-600 font-semibold">
                Eastern Province
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Akagera National Park
              </h3>
              <p class="text-gray-600 mt-3">
                Rwanda's famous safari destination and home to the Big Five.
              </p>
            </div>
          </div>

          <!-- Nyungwe -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-blue-600 font-semibold">
                Southern Province
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Nyungwe Forest
              </h3>
              <p class="text-gray-600 mt-3">
                One of Africa's oldest rainforests with canopy walks and chimpanzees.
              </p>
            </div>
          </div>

          <!-- Lake Kivu -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-cyan-600 font-semibold">
                Western Province
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Lake Kivu
              </h3>
              <p class="text-gray-600 mt-3">
                Beautiful beaches, boat rides and spectacular sunsets.
              </p>
            </div>
          </div>

          <!-- Kigali -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-purple-600 font-semibold">
                Kigali City
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Kigali Convention Centre
              </h3>
              <p class="text-gray-600 mt-3">
                A symbol of Rwanda's modern growth and innovation.
              </p>
            </div>
          </div>

          <!-- Twin Lakes -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              class="h-64 w-full object-cover"
            />
            <div class="p-6">
              <span class="text-green-600 font-semibold">
                Northern Province
              </span>
              <h3 class="text-2xl font-bold mt-2">
                Twin Lakes
              </h3>
              <p class="text-gray-600 mt-3">
                Stunning views of Lakes Burera and Ruhondo surrounded by hills.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="bg-green-700 text-white py-16">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 class="text-5xl font-bold">5</h3>
            <p class="mt-2">Regions</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">3</h3>
            <p class="mt-2">National Parks</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">100+</h3>
            <p class="mt-2">Tourist Attractions</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">1M+</h3>
            <p class="mt-2">Visitors</p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white text-center">
      <h2 class="text-5xl font-bold text-gray-800 mb-6">
        Your Adventure Starts Here
      </h2>

      <p class="text-gray-600 text-lg mb-8">
        Explore the Land of a Thousand Hills and create unforgettable memories.
      </p>

      <button
        class="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full font-semibold transition"
      >
        Explore More
      </button>
    </section>

  </div>
</template>

<script setup>
// No script needed
</script>