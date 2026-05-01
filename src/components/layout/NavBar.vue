<template>
  <div
    class="flex justify-between items-center px-6 py-4 sticky top-0 bg-white backdrop-blur-md shadow-xs"
  >
    <div>
      <img src="@/assets/img/logo-no-background.png" width="251" alt="Logo Banco Universitario" />
    </div>
    <div class="flex gap-x-8">
      <RouterLink to="/servicios">Servicios</RouterLink>
      <RouterLink to="/educacion-financiera">Educación Financiera</RouterLink>
      <RouterLink to="/alianzas">Alianzas</RouterLink>
      <RouterLink to="/sobre-nosotros">Sobre nosotros</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </div>
    <a
      href="https://bancaenlinea-bu.com"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-colors duration-300"
      >Banca en Línea</a
    >
  </div>
</template>
