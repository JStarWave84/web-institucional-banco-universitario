<script setup>
import {
  Flag,
  Rocket,
  Eye,
  CircleGauge,
  MonitorSmartphone,
  BookOpenText,
  HeartHandshake,
  Lightbulb,
} from '@lucide/vue'

const objetives = [
  {
    icon: CircleGauge,
    title: 'Gestión Eficiente',
    description:
      'Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Plataformas Digitales',
    description:
      'Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.',
  },
  {
    icon: BookOpenText,
    title: 'Educación Financiera',
    description:
      'Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.',
  },
  {
    icon: HeartHandshake,
    title: 'Alianzas Estratégicas',
    description:
      'Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Continua',
    description:
      'Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.',
  },
]
</script>

<template>
  <section class="bg-brand-bg grid grid-cols-12 gap-12 pt-20 pb-32 overflow-x-hidden px-6">
    <div class="col-span-7 flex flex-col gap-[30.8px]">
      <span
        class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
        >Espacio Académico</span
      >
      <h1 class="font-extrabold text-[42px] md:text-[56px] leading-[1.1] md:leading-18">
        Cultivando tu
        <span class="text-[#00928b] font-extrabold italic">Futuro</span> <br />
        Financiero.
      </h1>

      <p class="text-page-text text-[18px] leading-[29.3px] max-w-xl">
        Somos la institución diseñada por y para la comunidad universitaria, transformando la banca
        tradicional en un oasis de crecimiento académico y económico.
      </p>
    </div>

    <div class="col-span-5 relative">
      <!-- Overlay card (pequeña etiqueta) -->
      <div
        class="absolute left-26 bottom-5 bg-brand-primary/80 rounded-4xl backdrop-blur-md p-8 max-w-[220.45px] flex flex-col gap-2 z-10"
      >
        <span class="text-white font-bold text-[36px] leading-10">+50k</span>
        <span class="text-white text-[14px] leading-[17.5px]"
          >Estudiantes confían en nuestra visión de futuro</span
        >
      </div>
      <div
        class="w-[485.34px] h-[485.34px] rotate-45 transform translate-x-32 overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-full shadow-lg"
      >
        <img
          src="../assets/img/about-us-hero-image.jpg"
          class="w-full h-full object-cover transform -rotate-45 scale-[1.4142]"
          alt="Edificios universitarios"
        />
      </div>
    </div>
  </section>

  <section class="bg-brand-bg-secondary flex flex-col px-6 py-24">
    <div class="grid grid-cols-12 gap-8">
      <div
        class="bg-white col-span-12 md:col-span-7 flex flex-col px-12 pt-12 pb-[77.25px] rounded-4xl shadow-lg relative overflow-hidden group"
      >
        <div class="flex flex-col gap-[23.2px]">
          <Flag class="w-7.5 h-7.5 text-brand-primary" />
          <h2 class="pt-[0.8px] font-bold text-[30px] leading-9">Nuestra Misión</h2>
          <p class="text-page-text text-[18px] leading-[29.3px]">
            Empoderar a la comunidad universitaria mediante soluciones financieras innovadoras,
            accesibles y educativas que fomenten la autonomía económica y el éxito académico de los
            futuros profesionales de la nación.
          </p>
        </div>
        <Rocket
          class="absolute -right-6 -bottom-6 w-41.75 h-41.75 text-brand-bg-secondary group-hover:translate-x-2 group-hover:-translate-y-2 transition duration-300 group-hover:text-brand-secondary"
        />
      </div>

      <div
        class="bg-brand-primary col-span-12 md:col-span-5 flex flex-col gap-[23.4px] px-12 py-12 rounded-4xl shadow-lg hover:bg-brand-secondary transition-colors duration-300 group"
      >
        <Eye class="w-7.5 h-7.5 text-brand-secondary group-hover:text-brand-primary duration-300" />
        <h2 class="pt-[0.8px] text-white font-bold text-[30px] leading-9">Nuestra Visión</h2>
        <p class="text-white text-[18px] leading-[29.3px]">
          Ser el referente global de banca académica, integrando tecnología de vanguardia con un
          enfoque humano que inspire a cada estudiante a alcanzar sus metas más allá del aula.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-brand-bg px-6 py-24">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-4">
        <h2 class="font-extrabold text-brand-primary text-[36px] leading-10">
          Objetivos Estratégicos
        </h2>
        <span class="block w-24 h-1.5 bg-brand-primary rounded-4xl"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="col-span-1 rounded-4xl bg-brand-bg-secondary border border-[#BEC8C9]/30 shadow-lg p-8.25 group hover:bg-brand-primary transition duration-300"
          v-for="objetive in objetives"
          :key="objetive.title"
        >
          <span
            class="flex items-center justify-center w-14 h-14 bg-brand-primary/10 rounded-full mb-6 group-hover:bg-white transition duration-300"
          >
            <component :is="objetive.icon" class="w-6.25 h-6.25 text-brand-primary" />
          </span>

          <h3
            class="font-bold text-[20px] leading-7 group-hover:text-white transition duration-300"
          >
            {{ objetive.title }}
          </h3>
          <!-- al hacer hover aparece el texto-->
          <div
            class="pb-[0.88px] max-h-0 overflow-hidden opacity-0 invisible transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:visible"
          >
            <p
              class="text-page-text text-[14px] leading-[22.8px] group-hover:text-white transition duration-300"
            >
              {{ objetive.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-brand-bg-secondary flex items-center gap-12 px-10 md:px-20 py-20 mx-6 my-24 rounded-[48px]"
  >
    <div class="flex flex-col gap-8 max-w-full md:max-w-140">
      <h2
        class="font-extrabold text-brand-primary text-[26px] leading-10 md:text-[48px] md:leading-12"
      >
        ¿Listo para empezar tu camino con nosotros?
      </h2>
      <div class="flex flex-col gap-4 max-w-full md:max-w-67">
        <a
          href="#"
          target="_blank"
          class="bg-brand-primary text-white font-bold text-[16px] leading-6 text-center py-4 px-8 rounded-full shadow-lg hover:bg-brand-secondary transition-colors duration-300"
        >
          Abrir Cuenta Universitaria
        </a>
        <RouterLink
          to="/alianzas"
          class="bg-white text-brand-primary font-bold text-[16px] leading-6 text-center py-4 px-8 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-colors duration-300"
        >
          Conoce Nuestras Alianzas
        </RouterLink>
      </div>
    </div>

    <div class="flex-1">
      <img
        src="../assets/img/about-us-cta.jpg"
        class="object-cover rounded-[48px] shadow-lg"
        alt="Estudiantes reunidos"
      />
    </div>
  </section>
</template>
