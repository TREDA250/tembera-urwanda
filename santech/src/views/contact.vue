<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Hero Section -->
    <section class="relative h-[60vh]">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="Contact Rwanda"
        class="w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-7xl font-bold mb-4">
            Contact Us
          </h1>

          <p class="text-xl">
            We're here to help you plan your perfect Rwanda adventure.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="container mx-auto px-6 py-20">

      <div class="grid lg:grid-cols-2 gap-12">

        <!-- Contact Information -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">

          <h2 class="text-4xl font-bold text-green-700 mb-8">
            Get In Touch
          </h2>

          <div class="space-y-6">

            <div class="flex items-center gap-4">
              <span class="text-3xl">📍</span>
              <div>
                <h3 class="font-bold text-lg">Address</h3>
                <p class="text-gray-600">
                  Kigali City, Rwanda
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-3xl">📞</span>
              <div>
                <h3 class="font-bold text-lg">Phone</h3>
                <p class="text-gray-600">+250 788 123 456</p>
                <p class="text-gray-600">+250 722 987 654</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-3xl">📧</span>
              <div>
                <h3 class="font-bold text-lg">Email</h3>
                <p class="text-gray-600">
                  info@temberaurwanda.rw
                </p>
                <p class="text-gray-600">
                  support@temberaurwanda.rw
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-3xl">🕒</span>
              <div>
                <h3 class="font-bold text-lg">Working Hours</h3>
                <p class="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          <!-- Social Media -->
          <div class="mt-10">
            <h3 class="text-2xl font-bold mb-4">
              Follow Us
            </h3>

            <div class="flex gap-4">

              <a
                href="#"
                class="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
              >
                Facebook
              </a>

              <a
                href="#"
                class="bg-pink-600 text-white px-5 py-3 rounded-lg hover:bg-pink-700"
              >
                Instagram
              </a>

              <a
                href="#"
                class="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
              >
                X
              </a>

            </div>
          </div>

        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">

          <h2 class="text-4xl font-bold text-green-700 mb-8">
            Send Us A Message
          </h2>

          <form class="space-y-6">

            <div>
              <label class="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                class="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label class="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label class="block mb-2 font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                class="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label class="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

    <!-- Map Section -->
    <section class="pb-20 px-6">
      <div class="container mx-auto">

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">

          <iframe
            src="https://maps.google.com/maps?q=Kigali%20Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
            class="w-full h-[450px]"
            allowfullscreen=""
            loading="lazy">
          </iframe>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
</script>