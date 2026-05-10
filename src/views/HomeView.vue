<script setup>
import {
  CirclePlay,
  ShieldCheck,
  ArrowRightLeft,
  Landmark,
  Banknote,
  CircleCheck,
} from '@lucide/vue'
</script>

<template>
  <!--Hero section-->
  <section class="pt-20 pb-32 bg-brand-bg">
    <div class="flex items-center gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >El Banco de la Nueva Generación</span
        >
        <h1 class="font-extrabold text-[72px] leading-18">
          Tu futuro <br />
          <span class="text-[#00928b]">comienza aquí</span>
        </h1>

        <div class="pt-2 w-lg">
          <p class="text-[20px] leading-7 text-page-text">
            Diseñado específicamente para el ecosistema académico. Gestiona tus finanzas, recibe tu
            beca y paga tu matrícula con la agilidad que tu vida universitaria exige.
          </p>
        </div>

        <div class="flex pt-4 gap-4">
          <a
            href="#"
            class="bg-brand-primary text-white font-bold leading-7 px-8 py-4 rounded-4xl hover:bg-brand-secondary transition-colors"
          >
            Abre tu cuenta ahora
          </a>
          <a
            href="#"
            class="bg-gray-200 text-brand-primary font-bold leading-7 px-8 py-4 flex items-center gap-2 rounded-4xl hover:bg-brand-primary hover:text-white transition-colors"
          >
            <CirclePlay /> Ver tutorial
          </a>
        </div>
      </div>
      <div>
        <img
          src="../assets/img/hero-image.jpg"
          alt="Imagen de estudiantes universitarios usando el banco"
          class="w-full max-w-lg rounded-[48px] shadow-lg object-cover"
        />
        <!-- Highlight Card -->
        <div
          class="rounded-4xl shadow-lg px-6 py-6 flex gap-4 relative -left-6 -top-18 bg-white w-81"
        >
          <div class="bg-teal-300 rounded-4xl p-2 flex items-center">
            <ShieldCheck class="text-brand-primary" />
          </div>
          <div>
            <h3 class="text-[14px] leading-5 text-brand-primary font-bold">Seguridad Académica</h3>
            <p class="text-page-text text-[12px] leading-4">
              Protegemos tu patrimonio estudiantil con tecnología de punta.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Services section-->
  <section class="py-24 bg-brand-bg-secondary">
    <div class="flex flex-col gap-16 px-6">
      <div class="flex flex-col gap-4">
        <h2 class="font-extrabold text-brand-primary text-[36px] leading-10">
          Servicios Especializados
        </h2>
        <span class="block w-24 h-1.5 bg-brand-primary rounded-4xl"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
        <div class="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-4xl">
          <div
            class="bg-brand-bg-secondary rounded-4xl p-2 w-14 h-14 flex items-center justify-center"
          >
            <ArrowRightLeft class="text-brand-primary" />
          </div>
          <h3 class="pt-2 font-bold text-[20px] leading-7 text-brand-primary">
            Transferencias sin comisión
          </h3>
          <p class="text-page-text text-[16px] leading-6.5">
            Envía y recibe dinero entre compañeros de cualquier universidad del país al instante y
            con costo cero.
          </p>
        </div>

        <div class="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-4xl">
          <div
            class="bg-brand-bg-secondary rounded-4xl p-2 w-14 h-14 flex items-center justify-center"
          >
            <Landmark class="text-brand-primary" />
          </div>
          <h3 class="pt-2 font-bold text-[20px] leading-7 text-brand-primary">Pago de matrícula</h3>
          <p class="text-page-text text-[16px] leading-6.5">
            Gestiona el pago de tus unidades de crédito y semestres directamente desde nuestra app
            con convenios directos.
          </p>
        </div>

        <div class="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-4xl">
          <div
            class="bg-brand-bg-secondary rounded-4xl p-2 w-14 h-14 flex items-center justify-center"
          >
            <Banknote class="text-brand-primary" />
          </div>
          <h3 class="pt-2 font-bold text-[20px] leading-7 text-brand-primary">Cobro de becas</h3>
          <p class="text-page-text text-[16px] leading-6.5">
            Recibe tus depósitos de becas nacionales e institucionales de forma automática y segura
            cada mes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!--Education section-->
  <section class="px-6 py-24 bg-brand-bg">
    <div class="flex gap-16">
      <div class="hidden lg:block w-1/2">
        <img
          src="../assets/img/education-image.jpg"
          alt="Imagen de estudiantes universitarios aprendiendo sobre finanzas"
          class="rounded-[48px] shadow-lg object-cover"
        />
      </div>

      <div class="flex flex-col w-1/2 justify-center gap-4">
        <span class="font-bold text-[14px] leading-5 tracking-[1.4px] text-brand-primary uppercase"
          >Formación para el Futuro</span
        >
        <h2 class="font-extrabold text-[36px] leading-11.25">
          Educación Financiera para Universitarios
        </h2>
        <p class="text-[18px] leading-7 pt-[7.25px] text-page-text">
          No solo guardamos tu dinero, te enseñamos a multiplicarlo. Accede a talleres exclusivos
          diseñados para la realidad económica del estudiante venezolano.
        </p>

        <ul class="pt-4 pb-6 space-y-4">
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-primary" />
            <span class="text-page-text text-[16px] leading-6.5">
              Talleres prácticos sobre gestión financiera
            </span>
          </li>
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-primary" />
            <span class="text-page-text text-[16px] leading-6.5">
              Seminarios sobre inversión y ahorro
            </span>
          </li>
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-primary" />
            <span class="text-page-text text-[16px] leading-6.5">
              Asesoría personalizada para planificación financiera
            </span>
          </li>
        </ul>
        <div>
          <a
            href="#"
            class="text-brand-primary font-bold text-[16px] leading-6 px-8 py-3 bg-teal-200 rounded-4xl hover:bg-brand-primary hover:text-teal-200 transition-colors"
            >Explorar talleres</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Social media CTA-->
  <section class="py-12 bg-teal-100/50">
    <div class="px-6 flex justify-between">
      <div>
        <h2 class="font-bold text-[24px] leading-8 text-brand-primary">
          Únete a nuestras redes sociales
        </h2>
        <p class="text-page-text text-[16px] leading-6">
          Entérate de sorteos, eventos y nuevos beneficios cada semana.
        </p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  </section>
</template>
