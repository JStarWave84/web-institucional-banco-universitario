<script setup>
import { Smartphone, MapPin, Phone, Mail, Medal, AtSign } from '@lucide/vue'

let links = [
  { name: 'Mapa del Sitio', path: '#' },
  { name: 'Términos y Condiciones', path: '#' },
  { name: 'Privacidad', path: '#' },
  { name: 'Atención al Cliente', path: '#' },
]
</script>

<template>
  <footer class="w-full bg-[#042f2e] py-12 flex flex-col items-center justify-center gap-12">
    <div class="flex flex-wrap justify-center px-8 gap-8">
      <!--Brand Info-->
      <div class="w-full max-w-70 lg:w-70 flex flex-col gap-6 mb-[45.5px]">
        <div>
          <h2 class="text-white text-[20px]">Banco Universitario</h2>
        </div>
        <div>
          <p class="text-[12px] text-teal-200/70">
            Transformando la banca para la comunidad académica de Venezuela. Innovación, confianza y
            crecimiento.
          </p>
        </div>
      </div>
      <!--Links-->
      <div class="w-full max-w-70 lg:w-70 flex flex-col gap-6 mb-[45.5px]">
        <div>
          <h4 class="text-[14px] text-white font-bold">Explora</h4>
        </div>
        <div>
          <ul class="text-teal-200/70 text-[12px] space-y-4">
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.path" class="hover:text-teal-300 transition-colors duration-200">{{
                link.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--Contact-->
      <div class="w-full max-w-70 lg:w-70 flex flex-col gap-6 mb-[45.5px]">
        <div>
          <h4 class="text-[14px] text-white font-bold">Contacto</h4>
        </div>
        <div>
          <ul class="text-teal-200/70 text-[12px] space-y-4">
            <li><MapPin class="inline-block w-3" /> Av. Universidad, Caracas.</li>
            <li><Phone class="inline-block w-3" /> +58 212-555-5555</li>
            <li><Mail class="inline-block w-3" /> info@bancouniversitario.com.ve</li>
          </ul>
        </div>
      </div>
      <!--App-->
      <div class="w-full max-w-70 lg:w-70 flex flex-col gap-6 mb-[45.5px]">
        <div>
          <h4 class="text-[14px] text-white font-bold">Descarga nuestra App</h4>
        </div>
        <div class="bg-white/10 p-4 rounded-4xl flex gap-4 items-center">
          <Smartphone class="text-white" />
          <div>
            <p class="font-bold text-teal-300 text-[10px]">AVAILABLE ON</p>
            <p class="text-white text-[12px]">App Store & Play Store</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-8 pt-8 flex flex-col gap-4 justify-between border-t border-teal-200/10 w-full lg:flex-row lg:items-center"
    >
      <div>
        <p class="text-teal-200/70">
          &copy; 2023 Banco Universitario. Av. Universidad, Caracas. Todos los derechos reservados.
        </p>
      </div>
      <div class="flex gap-4">
        <span class="rounded-full bg-white/10 w-8 h-8 flex items-center justify-center"
          ><Medal class="text-white w-4"
        /></span>
        <span class="rounded-full bg-white/10 w-8 h-8 flex items-center justify-center"
          ><AtSign class="text-white w-4"
        /></span>
      </div>
    </div>
  </footer>
</template>
