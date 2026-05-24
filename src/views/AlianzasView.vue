<script setup>
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Building,
  ArrowRight,
  Stars,
  CheckCircle,
} from '@lucide/vue'

const partners = [
  { acronym: 'UCV', name: 'Central de Venezuela', tagline: 'Patrimonio y Academia' },
  { acronym: 'USB', name: 'Simón Bolívar', tagline: 'Excelencia Tecnológica' },
  { acronym: 'UCAB', name: 'Andrés Bello', tagline: 'Liderazgo y Valores' },
  { acronym: 'UCLA', name: 'Centroccidental', tagline: 'Luz y Verdad' },
  { acronym: 'ULA', name: 'Delos Andes', tagline: 'Tradición y Sabiduría' },
]
</script>

<template>
  <section class="bg-brand-bg py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div class="space-y-6">
          <span class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Ecosistema de colaboración
          </span>

          <h1 class="text-[40px] md:text-[56px] leading-[1.05] font-extrabold text-[#08363a]">
            Uniendo <span class="text-brand-primary">Academia</span> y <span class="text-brand-secondary">Oportunidad</span>.
          </h1>

          <p class="max-w-2xl text-[18px] leading-8 text-page-text">
            Construimos puentes entre el sector financiero y las instituciones educativas más prestigiosas de Venezuela para potenciar tu futuro profesional.
          </p>

          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#beneficios" class="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-brand-secondary">
              Descubrir Beneficios
            </a>
            <a href="#alianza" class="inline-flex items-center justify-center rounded-full border border-brand-primary bg-white px-8 py-4 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white">
              Ser un Aliado
            </a>
          </div>
        </div>

        <div class="relative rounded-[48px] bg-[#e8f6f4] p-10 shadow-[0_40px_80px_rgba(2,41,36,0.12)] overflow-hidden">
          <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/20"></div>
          <div class="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(49,164,150,0.25),_transparent_45%)]"></div>
          <div class="relative flex flex-col gap-8">
            <div class="rounded-[32px] bg-white/95 p-6 shadow-lg border border-teal-100">
              <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-primary text-white">
                  <ShieldCheck class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-[12px] uppercase tracking-[0.3em] font-semibold text-brand-primary/80">Colaboración</p>
                  <p class="mt-2 text-[16px] font-bold text-[#08363a]">+50 Convenios Activos</p>
                </div>
              </div>
            </div>

            <div class="rounded-[32px] bg-white/95 p-8 shadow-lg border border-teal-100">
              <div class="flex items-center gap-3 text-brand-primary mb-4">
                <Stars class="w-5 h-5" />
                <span class="text-[12px] uppercase tracking-[0.3em] font-semibold">Aliados estratégicos</span>
              </div>
              <h2 class="text-[24px] font-extrabold text-[#08363a]">Impulsamos tu camino académico con beneficios exclusivos.</h2>
              <p class="mt-4 text-page-text leading-7">
                Diseñamos experiencias integradas para estudiantes, docentes y comunidades universitarias que buscan más oportunidades y menos trámites.
              </p>
              <div class="mt-6 inline-flex items-center gap-2 text-brand-primary font-semibold">
                <span>Ver alianzas</span>
                <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="beneficios" class="bg-white py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="mb-12 text-center">
        <h2 class="text-[32px] md:text-[40px] font-extrabold text-[#08363a]">Universidades Aliadas</h2>
        <p class="mt-4 max-w-2xl mx-auto text-page-text text-[17px] leading-8">
          Formamos parte de las casas de estudio más emblemáticas del país, ofreciendo una integración bancaria fluida para estudiantes y docentes.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="partner in partners" :key="partner.acronym" class="rounded-[32px] border border-[#e6f2ef] bg-brand-bg-secondary p-6 text-center shadow-sm">
          <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm">
            <span class="text-[20px] font-extrabold">{{ partner.acronym }}</span>
          </div>
          <h3 class="text-[18px] font-bold text-[#08363a] mb-2">{{ partner.name }}</h3>
          <p class="text-page-text text-[14px] leading-6">{{ partner.tagline }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="alianza" class="bg-brand-bg py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="grid gap-12">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Tu Carnet es tu Pasaporte Financiero
          </span>
          <h2 class="mt-5 text-[34px] md:text-[44px] font-extrabold text-[#08363a] leading-tight">
            Accede a un mundo de privilegios diseñado para aliviar tu carga académica y potenciar tu carrera.
          </h2>
          <p class="mt-6 max-w-2xl text-page-text text-[18px] leading-8">
            Como estudiante de nuestras universidades aliadas, accedes a beneficios exclusivos que te acompañan desde la matrícula hasta tus prácticas laborales.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-3">
          <div class="rounded-[32px] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#e9f5f2]">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-bg-secondary text-brand-primary">
              <Building class="w-6 h-6" />
            </div>
            <h3 class="text-[18px] font-bold text-[#08363a] mb-3">Descuento en Matrículas</h3>
            <p class="text-page-text text-[15px] leading-7">
              Obtén hasta un 15% de descuento directo en el pago de tus cuotas mensuales al domiciliar tus pagos con Banco Universitario.
            </p>
            <a href="#" class="mt-5 inline-flex items-center gap-2 text-brand-primary font-semibold">
              Saber más <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <div class="rounded-[32px] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#e9f5f2]">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-bg-secondary text-brand-primary">
              <BookOpen class="w-6 h-6" />
            </div>
            <h3 class="text-[18px] font-bold text-[#08363a] mb-3">Fondo de Becas</h3>
            <p class="text-page-text text-[15px] leading-7">
              Acceso exclusivo a nuestro programa de becas de excelencia para estudiantes con promedios superiores a 17 puntos.
            </p>
            <a href="#" class="mt-5 inline-flex items-center gap-2 text-brand-primary font-semibold">
              Ver requisitos <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <div class="rounded-[32px] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#e9f5f2]">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-bg-secondary text-brand-primary">
              <GraduationCap class="w-6 h-6" />
            </div>
            <h3 class="text-[18px] font-bold text-[#08363a] mb-3">Prácticas Laborales</h3>
            <p class="text-page-text text-[15px] leading-7">
              Prioridad en procesos de selección para pasantías y empleo dentro de la red de empresas aliadas al banco.
            </p>
            <a href="#" class="mt-5 inline-flex items-center gap-2 text-brand-primary font-semibold">
              Explorar vacantes <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#04403b] py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div class="space-y-8 text-white">
          <div class="max-w-xl">

            <h2 class="text-[#ffffff] mt-5 text-[36px] md:text-[38px] font-extrabold leading-tight">
              ¿Desea ser parte de nuestro oasis educativo?
            </h2>
            <p class="mt-6 text-[18px] leading-8 text-[#90d6db] max-w-xl">
              Estamos en búsqueda constante de universidades, institutos y corporaciones que compartan nuestra misión de democratizar la educación financiera y el éxito académico.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-1">
            <div class="flex gap-3">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10 text-white">
                <CheckCircle class="w-5 h-5" />
              </div>
              <p class="text-[16px] leading-7 text-white">
                Integración tecnológica API gratuita
              </p>
            </div>
            <div class="flex gap-3">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10 text-white">
                <CheckCircle class="w-5 h-5" />
              </div>
              <p class="text-[16px] leading-7 text-white">
                Soporte institucional 24/7
              </p>
            </div>
            <div class="flex gap-3">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10 text-white">
                <CheckCircle class="w-5 h-5" />
              </div>
              <p class="text-[16px] leading-7 text-white">
                Programas de Co-Branding
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-[40px] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.14)]">
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Nombre de la institución</label>
              <input type="text" placeholder="Ej. Universidad de Oriente" class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Tipo de alianza</label>
              <select class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20">
                <option>Educativa</option>
                <option>Corporativa</option>
                <option>Institucional</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Correo institucional</label>
              <input type="email" placeholder="alianzas@institucion.edu" class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Mensaje / propuesta</label>
              <textarea rows="4" placeholder="Cuéntenos sobre su interés en colaborar..." class="w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"></textarea>
            </div>
            <button type="submit" class="w-full rounded-full bg-brand-primary px-6 py-4 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-brand-secondary">
              Solicitar Información de Convenio
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
