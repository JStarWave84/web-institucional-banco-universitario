<script setup>
import {
  HeartHandshake,
  ArrowRight,
  Banknote,
  GraduationCap,
  BriefcaseBusiness,
  CircleCheck,
} from '@lucide/vue'

const partners = [
  { acronym: 'UCV', name: 'Central de Venezuela', tagline: 'Patrimonio y Academia' },
  { acronym: 'USB', name: 'Simón Bolívar', tagline: 'Excelencia Tecnológica' },
  { acronym: 'UCAB', name: 'Andrés Bello', tagline: 'Liderazgo y Valores' },
  { acronym: 'UCLA', name: 'Centroccidental', tagline: 'Luz y Verdad' },
  { acronym: 'ULA', name: 'De los Andes', tagline: 'Tradición y Sabiduría' },
]

const privileges = [
  {
    icon: Banknote,
    title: 'Descuento en Matrículas',
    description:
      'Obtén hasta un 15% de descuento directo en el pago de tus cuotas mensuales al domiciliar tus pagos con Banco Universitario.',
    link: '#',
    linkText: 'Saber más',
  },
  {
    icon: GraduationCap,
    title: 'Fondo de Becas',
    description:
      'Acceso exclusivo a nuestro programa de becas de excelencia para estudiantes con promedios superiores a 17 puntos.',
    link: '#',
    linkText: 'Ver requisitos',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Prácticas Laborales',
    description:
      'Prioridad en procesos de selección para pasantías y empleos dentro de la red de empresas aliadas al banco.',
    link: '#',
    linkText: 'Explorar Vacantes',
  },
]
</script>

<template>
  <section class="pt-20 pb-16 bg-brand-bg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >Ecosistema de Colaboración</span
        >
        <h1 class="font-extrabold text-[42px] md:text-[72px] leading-[1.1] md:leading-18">
          Uniendo <br />
          <span class="text-[#00928b] font-extrabold">Academia</span> y <br />
          Oportunidad.
        </h1>

        <div class="pt-2 w-full md:w-lg">
          <p class="text-[18px] md:text-[18px] leading-7 text-page-text">
            Construimos puentes entre el sector financiero y las instituciones educativas más
            prestigiosas de Venezuela para potenciar tu futuro profesional.
          </p>
        </div>

        <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <a
            href="#"
            class="bg-brand-primary text-white font-bold leading-7 px-8 py-4 rounded-4xl shadow-lg hover:bg-brand-secondary transition-colors w-full sm:w-auto text-center"
          >
            Descubrir Beneficios
          </a>
          <a
            href="#"
            class="bg-gray-200 text-brand-primary font-bold leading-7 px-8 py-4 flex items-center justify-center gap-2 rounded-4xl hover:bg-brand-primary hover:text-white transition-colors w-full sm:w-auto"
          >
            Ser un Aliado
          </a>
        </div>
      </div>
      <div class="relative group">
        <img
          src="../assets/img/alianzas-image.jpg"
          alt="ATM con estudiante retirando dinero"
          class="w-full rounded-[48px] shadow-lg object-cover relative z-10"
        />

        <div
          class="absolute inset-0 rounded-[48px] z-15 pointer-events-none bg-linear-to-t from-[#F7FAF9] via-[#F7FAF9]/0 to-[#F7FAF9]/0"
        ></div>

        <div
          class="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-6 lg:bottom-12 z-25 bg-white rounded-4xl shadow-xl px-6 py-6 flex gap-4 w-72 md:w-81"
        >
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <HeartHandshake class="w-6.75 h-7.5 text-brand-primary" />
              <h3 class="text-[14px] leading-5 text-brand-primary font-bold">
                +50 Convenios Activos
              </h3>
            </div>
            <p class="text-page-text text-[12px] leading-4">
              Instituciones que confían en nuestra visión de futuro compartido.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-brand-bg-secondary px-8 py-24 flex flex-col">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-start gap-4">
        <h2 class="text-brand-primary font-bold text-[36px] leading-10">Universidades Aliadas</h2>
        <p class="text-page-text text-[16px] leading-6 max-w-2xl">
          Formamos parte de las casas de estudio más emblemáticas del país, ofreciendo una
          integración bancaria fluida para estudiantes y docentes.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="partner in partners"
          :key="partner.acronym"
          class="bg-white rounded-4xl shadow-lg px-8 pt-8 pb-20 flex flex-col items-center justify-center gap-4 text-center"
        >
          <div
            class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-brand-primary font-bold text-lg"
          >
            {{ partner.acronym }}
          </div>
          <h3 class="text-[16px] leading-6 font-bold text-brand-primary">{{ partner.name }}</h3>
          <p class="text-page-text text-[12px] leading-4">{{ partner.tagline }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-brand-bg flex flex-col px-8 py-24">
    <div class="flex flex-col gap-20">
      <div class="flex flex-col items-center gap-6">
        <h3 class="font-extrabold text-[48px] leading-12">Tu Carnet es tu Pasaporte Financiero</h3>
        <p class="text-page-text text-[20px] leading-7 max-w-3xl text-start lg:text-center">
          Como estudiante de nuestras universidades aliadas, accedes a un mundo de privilegios
          diseñados para aliviar tu carga académica y potenciar tu carrera.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="flex flex-col p-10 rounded-4xl bg-white shadow-lg"
          v-for="privilege in privileges"
          :key="privilege.title"
        >
          <div class="pb-8">
            <component :is="privilege.icon" class="w-9.5 h-9.5 text-brand-primary" />
          </div>
          <div class="pb-4">
            <h3 class="font-bold text-[24px] leading-8">{{ privilege.title }}</h3>
          </div>
          <div class="pb-8">
            <p class="text-page-text text-[16px] leading-6">{{ privilege.description }}</p>
          </div>
          <a class="flex items-center gap-2 group" :href="privilege.link" target="_blank">
            <span
              class="font-bold text-[16px] leading-6 text-brand-primary group-hover:text-brand-secondary transition-colors duration-200"
              >{{ privilege.linkText }}</span
            >
            <ArrowRight
              class="w-4 h-4 group-hover:translate-x-1 text-brand-primary transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#004649] flex flex-col px-8 py-24">
    <div class="grid grid-cols-5 gap-16">
      <div class="col-span-5 md:col-span-5 lg:col-span-2 flex flex-col gap-[23.4px] pb-10">
        <h2 class="text-white font-extrabold text-[36px] leading-11.25">
          ¿Desea ser parte de nuestro oasis educativo?
        </h2>
        <p class="text-[18px] leading-[29.3px] text-brand-secondary pb-[0.63px]">
          Estamos en búsqueda constante de universidades, institutos y corporaciones que compartan
          nuestra misión de democratizar la educación financiera y el éxito académico.
        </p>
        <ul class="pt-[8.6px] space-y-4">
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-secondary" />
            <span class="text-white text-[16px] leading-6">
              Integración tecnológica API gratuita
            </span>
          </li>
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-secondary" />
            <span class="text-white text-[16px] leading-6"> Soporte institucional 24/7 </span>
          </li>
          <li class="flex items-start gap-3">
            <CircleCheck class="text-brand-secondary" />
            <span class="text-white text-[16px] leading-6"> Programas de Co-Branding </span>
          </li>
        </ul>
      </div>

      <div
        class="bg-white col-span-5 md:col-span-5 lg:col-span-3 flex flex-col px-10 pt-10 pb-14 rounded-[48px] shadow-lg"
      >
        <form class="grid grid-cols-2 gap-6" action="">
          <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label
              for="institution-name"
              class="uppercase text-brand-primary font-bold text-[12px] leading-4 tracking-[0.6px]"
              >Nombre de la Institución</label
            >
            <input
              type="text"
              id="institution-name"
              class="bg-brand-bg-secondary px-4 py-4.25 rounded-full active:ring-2 active:ring-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors duration-200"
              placeholder="Ej. Universidad de Oriente"
              required
            />
          </div>

          <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
            <label
              for="alliance-type"
              class="uppercase text-brand-primary font-bold text-[12px] leading-4 tracking-[0.6px]"
              >Tipo de Alianza</label
            >
            <select
              name="alliance-type"
              id="alliance-type"
              class="bg-brand-bg-secondary px-4 py-4.25 rounded-full active:ring-2 active:ring-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors duration-200"
              required
            >
              <option value="">Seleccionar</option>
              <option value="educativa">Educativa</option>
              <option value="institucional">Institucional</option>
              <option value="corporativa">Corporativa</option>
            </select>
          </div>

          <div class="col-span-2 flex flex-col gap-2">
            <label
              for="institutional-email"
              class="uppercase text-brand-primary font-bold text-[12px] leading-4 tracking-[0.6px]"
              >Correo Institucional</label
            >
            <input
              type="email"
              id="institutional-email"
              class="bg-brand-bg-secondary px-4 py-4.25 rounded-full active:ring-2 active:ring-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors duration-200"
              placeholder="universidad@udo.edu.ve"
              required
            />
          </div>

          <div class="col-span-2 flex flex-col gap-2">
            <label
              for="proposal"
              class="uppercase text-brand-primary font-bold text-[12px] leading-4 tracking-[0.6px]"
              >Mensaje / Propuesta</label
            >
            <textarea
              id="proposal"
              rows="4"
              class="bg-brand-bg-secondary px-4 py-4.25 rounded-[30px] active:ring-2 active:ring-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors duration-200 h-26 resize-none"
              placeholder="Cuéntenos sobre su interés en colaborar..."
              required
            ></textarea>
          </div>

          <div class="col-span-2 flex flex-col">
            <button
              type="submit"
              class="bg-brand-primary text-white font-bold text-[18px] leading-7 px-4 md:px-[164.66px] py-4 rounded-full hover:bg-brand-secondary transition-colors cursor-pointer"
            >
              Solicitar Información de Convenio
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
