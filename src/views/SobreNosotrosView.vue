<script setup>
import {
  ArrowRight,
  Eye,
  Flag,
  Layers,
  ShieldCheck,
  BookOpen,
  Users,
  CheckCircle,
} from '@lucide/vue'
</script>

<template>
  <section class="bg-brand-bg py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div class="space-y-7">
          <span
            class="inline-flex items-center gap-2 rounded-full bg-[#d4f0ec] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-brand-primary"
          >
            Espacio Académico
          </span>

          <h1 class="text-[40px] md:text-[56px] leading-[1.03] font-extrabold text-[#08363a]">
            Cultivando tu futuro financiero.
          </h1>

          <p class="max-w-2xl text-[18px] leading-9 text-page-text">
            Somos la institución diseñada para y por la comunidad universitaria, transformando la banca
            tradicional en un oasis de crecimiento académico y económico.
          </p>

          <div class="mt-8 w-full max-w-xl"></div>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-[48px] bg-white shadow-[0_40px_120px_rgba(2,41,36,0.12)]">
            <img
              src="../assets/img/estudiantes-uni.jpg"
              alt="Grupo de estudiantes universitarios"
              class="w-full h-[560px] object-cover"
            />
          </div>
          <div
            class="absolute left-6 top-6 rounded-[32px] bg-white/85 p-6 shadow-[0_30px_80px_rgba(2,41,36,0.12)] backdrop-blur-xl border border-white/70 max-w-[220px]"
          >
            <p class="text-[24px] font-extrabold text-[#08363a]">+50k</p>
            <p class="mt-2 text-[13px] leading-5 text-[#08363a]/80">
              Estudiantes confían en nuestras vías de futuro.
            </p>
          </div>
          <div
            class="absolute -right-10 top-10 hidden h-32 w-32 rounded-full border border-white bg-white/80 shadow-[0_20px_60px_rgba(2,41,36,0.1)] lg:block"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#f7faf9] py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-[32px] border border-[#d8efea] bg-white p-10 shadow-[0_20px_60px_rgba(2,41,36,0.08)]">
          <div class="flex items-center gap-3 text-brand-primary mb-6">
            <Flag class="w-5 h-5" />
            <span class="text-[12px] font-semibold uppercase tracking-[0.26em]">Nuestra Misión</span>
          </div>
          <p class="text-page-text text-[16px] leading-8">
            Empoderar a la comunidad universitaria mediante soluciones financieras innovadoras, accesibles y
            educativas que fomenten la autonomía económica y el éxito académico de los futuros profesionales.
          </p>
        </div>

        <div class="rounded-[32px] bg-brand-primary p-10 text-white shadow-[0_20px_60px_rgba(2,41,36,0.12)]">
          <div class="flex items-center gap-3 mb-6">
            <Eye class="w-5 h-5" />
            <span class="text-[12px] font-semibold uppercase tracking-[0.26em]">Nuestra Visión</span>
          </div>
          <p class="text-[16px] leading-8">
            Ser el referente global de banca académica, integrando tecnología de vanguardia con un enfoque humano
            que inspire a cada estudiante a alcanzar sus metas más allá del aula.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-brand-bg py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="mb-10 max-w-2xl">
        <h2 class="text-[28px] md:text-[36px] font-extrabold text-[#08363a]">Objetivos Estratégicos</h2>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <Layers class="w-5 h-5" />
            <span class="font-semibold">Gestión Eficiente</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Optimizar procesos internos para brindar servicios más rápidos y confiables.
          </p>
        </div>

        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <ArrowRight class="w-5 h-5" />
            <span class="font-semibold">Plataformas Digitales</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Desarrollar herramientas digitales que faciliten la vida financiera universitaria.
          </p>
        </div>

        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <BookOpen class="w-5 h-5" />
            <span class="font-semibold">Educación Financiera</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Ofrecer contenido y talleres para fortalecer habilidades de ahorro e inversión.
          </p>
        </div>

        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <ShieldCheck class="w-5 h-5" />
            <span class="font-semibold">Alianzas Estratégicas</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Construir colaboraciones con universidades y programas académicos clave.
          </p>
        </div>

        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <Users class="w-5 h-5" />
            <span class="font-semibold">Innovación Continua</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Adaptar servicios con nuevas soluciones para la comunidad estudiantil.
          </p>
        </div>

        <div class="rounded-[32px] border border-[#d8efea] bg-white p-6 shadow-[0_20px_60px_rgba(2,41,36,0.06)]">
          <div class="flex items-center gap-3 text-brand-primary mb-4">
            <CheckCircle class="w-5 h-5" />
            <span class="font-semibold">Experiencia Continua</span>
          </div>
          <p class="text-page-text text-sm leading-6">
            Mantener altos estándares de servicio que fidelicen a nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-brand-bg-secondary py-24">
    <div class="mx-auto max-w-[1220px] px-6">
      <div class="overflow-hidden rounded-[48px] bg-white p-8 shadow-[0_40px_120px_rgba(2,41,36,0.08)]">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div class="space-y-8">
            <h2 class="text-[32px] md:text-[44px] font-extrabold text-[#08363a]">
              ¿Listo para empezar tu camino con nosotros?
            </h2>
            <p class="max-w-2xl text-page-text text-[18px] leading-8">
              Descubre los beneficios académicos y financieros que Banco Universitario ofrece para
              acompañar tu crecimiento desde el primer semestre.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                class="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-brand-secondary"
              >
                Abrir Cuenta Universitaria
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center rounded-full border border-brand-primary bg-white px-8 py-4 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white"
              >
                Conoce Nuestras Alianzas
              </a>
            </div>
          </div>

          <div class="rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(2,41,36,0.12)]">
            <img
              src="../assets/img/estudiantes-uni.jpg"
              alt="Estudiantes colaborando en una mesa con laptops"
              class="w-full h-full object-cover min-h-[340px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
