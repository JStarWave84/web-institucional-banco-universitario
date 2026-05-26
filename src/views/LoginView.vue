<script setup>
</script>

<template>
  <section class="min-h-screen bg-white flex items-center">
    <div class="mx-auto max-w-md w-full px-6 py-12">
      <h2 class="text-3xl font-extrabold text-slate-900">Iniciar sesión</h2>
      <p class="mt-2 text-sm text-slate-500">Accede a tu cuenta para continuar.</p>

      <form class="mt-8 space-y-6">
        <label class="block">
          <span class="text-xs font-bold text-slate-700">Correo Electrónico</span>
          <input type="email" placeholder="nombre@ejemplo.com" class="mt-1 w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none focus:bg-[#dee2e6]" />
        </label>

        <label class="block">
          <span class="text-xs font-bold text-slate-700">Contraseña</span>
          <input type="password" placeholder="Tu contraseña" class="mt-1 w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none focus:bg-[#dee2e6]" />
        </label>

        <div>
          <button type="button" class="w-full rounded-full bg-[#055151] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#055151]/20 hover:bg-[#033636]">Entrar</button>
        </div>

        <p class="text-center text-xs text-slate-500 font-medium">
          ¿No tienes cuenta? <router-link to="/crear-cuenta" class="font-bold text-[#055151] hover:underline">Crea una aquí</router-link>
        </p>
      </form>
    </div>
  </section>
</template>
