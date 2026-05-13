<script setup>
import { Award, ShieldCheck, Sparkles, BookOpen, HeartHandshake } from '@lucide/vue'
</script>

<template>
  <section class="pt-20 pb-28 bg-brand-bg">
    <div class="max-w-[1220px] mx-auto px-6">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div class="space-y-6">
          <span
            class="inline-flex items-center gap-2 bg-teal-300/20 text-brand-primary px-4 py-2 rounded-4xl font-semibold text-sm"
            >Sobre Nosotros</span
          >
          <h1 class="font-extrabold text-[40px] md:text-[56px] leading-tight text-[#072e2d]">
            Somos el banco que acompaña el talento universitario en cada etapa de su camino.
          </h1>
          <p class="text-page-text text-[18px] leading-8 max-w-3xl">
            Banco Universitario nació para ofrecer una banca moderna, confiable y accesible a estudiantes,
            profesores y personal académico. Nuestro propósito es impulsar el crecimiento de la comunidad
            universitaria con soluciones financieras pensadas para su vida diaria.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-4xl bg-white p-8 shadow-lg border border-teal-100">
              <div class="flex items-center gap-3 text-brand-primary">
                <Award class="w-6 h-6" />
                <span class="font-semibold">25+ años de experiencia</span>
              </div>
              <p class="text-page-text text-sm mt-3">
                Acompañando a miles de universitarios con productos bancarios que entienden su realidad.
              </p>
            </div>
            <div class="rounded-4xl bg-white p-8 shadow-lg border border-teal-100">
              <div class="flex items-center gap-3 text-brand-primary">
                <ShieldCheck class="w-6 h-6" />
                <span class="font-semibold">Seguridad y confianza</span>
              </div>
              <p class="text-page-text text-sm mt-3">
                Protección digital de última generación para cada operación, en todo momento.
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(2,41,36,0.12)] bg-white">
          <img
            src="../assets/img/estudiantes-uni.jpg"
            alt="Equipo del Banco Universitario trabajando junto a estudiantes"
            class="w-full h-full object-cover max-h-[520px]"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-brand-bg-secondary">
    <div class="max-w-[1220px] mx-auto px-6 grid gap-16 lg:grid-cols-3">
      <div class="rounded-4xl bg-white shadow-lg p-10 border border-teal-100">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
          <Sparkles class="w-6 h-6" />
        </div>
        <h2 class="text-[20px] font-bold text-[#072e2d] mb-4">Nuestra misión</h2>
        <p class="text-page-text leading-7">
          Empoderar a la comunidad universitaria con servicios financieros inclusivos, ágiles y seguros,
          que faciliten su desarrollo académico y profesional.
        </p>
      </div>

      <div class="rounded-4xl bg-white shadow-lg p-10 border border-teal-100">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
          <BookOpen class="w-6 h-6" />
        </div>
        <h2 class="text-[20px] font-bold text-[#072e2d] mb-4">Nuestra visión</h2>
        <p class="text-page-text leading-7">
          Ser el referente bancario para la comunidad académica en Venezuela, con una experiencia digital
          que inspire confianza y crecimiento sostenible.
        </p>
      </div>

      <div class="rounded-4xl bg-white shadow-lg p-10 border border-teal-100">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
          <HeartHandshake class="w-6 h-6" />
        </div>
        <h2 class="text-[20px] font-bold text-[#072e2d] mb-4">Nuestros valores</h2>
        <ul class="space-y-3 text-page-text leading-7">
          <li><strong>Compromiso:</strong> Ponemos al estudiante en el centro de cada servicio.</li>
          <li><strong>Innovación:</strong> Creamos soluciones bancarias adaptadas a la vida universitaria.</li>
          <li><strong>Transparencia:</strong> Comunicamos con claridad y honradez en cada interacción.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="py-24 bg-brand-bg">
    <div class="max-w-[1220px] mx-auto px-6">
      <div class="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] items-center">
        <div class="space-y-6">
          <span class="text-brand-primary font-bold uppercase tracking-[0.3em] text-[12px]">Historia</span>
          <h2 class="font-extrabold text-[36px] md:text-[48px] text-[#072e2d]">Una trayectoria construida junto a las universidades</h2>
          <p class="text-page-text text-[18px] leading-8">
            Desde nuestros inicios, hemos crecido junto a la comunidad académica, creando alianzas con
            instituciones y desarrollando productos que respondan a las necesidades reales de los estudiantes.
          </p>
        </div>

        <div class="grid gap-6">
          <div class="rounded-4xl bg-white border border-teal-100 shadow-lg p-8">
            <div class="text-brand-primary font-bold text-[14px] uppercase mb-3">1995</div>
            <p class="text-page-text leading-7">
              Nace Banco Universitario con el objetivo de ofrecer servicios financieros especializados para
              el sector académico.</p>
          </div>
          <div class="rounded-4xl bg-white border border-teal-100 shadow-lg p-8">
            <div class="text-brand-primary font-bold text-[14px] uppercase mb-3">2010</div>
            <p class="text-page-text leading-7">
              Amplíamos nuestra red de convenios y lanzamos programas de apoyo a la financiación de matrícula.
            </p>
          </div>
          <div class="rounded-4xl bg-white border border-teal-100 shadow-lg p-8">
            <div class="text-brand-primary font-bold text-[14px] uppercase mb-3">2024</div>
            <p class="text-page-text leading-7">
              Consolidamos una experiencia digital completa con una app y servicios para las necesidades
              financieras universitarias modernas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-24 bg-brand-bg-secondary">
    <div class="max-w-[1220px] mx-auto px-6">
      <div class="rounded-[48px] bg-white p-10 shadow-[0_40px_120px_rgba(2,41,36,0.08)]">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div class="space-y-6">
            <span class="text-brand-primary font-bold uppercase tracking-[0.3em] text-[12px]">Equipo</span>
            <h2 class="font-extrabold text-[36px] md:text-[48px] text-[#072e2d]">Un equipo con pasión por la educación y la banca.</h2>
            <p class="text-page-text text-[18px] leading-8">
              Nuestro equipo combina experiencia financiera con conocimiento del mundo estudiantil para
              entregar soluciones de alto impacto y atención personalizada.
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="rounded-4xl bg-brand-bg p-6 border border-teal-100">
              <h3 class="text-[18px] font-semibold text-[#072e2d] mb-3">Atención personalizada</h3>
              <p class="text-page-text leading-7">Asesoramos a cada cliente con cercanía y soluciones claras.</p>
            </div>
            <div class="rounded-4xl bg-brand-bg p-6 border border-teal-100">
              <h3 class="text-[18px] font-semibold text-[#072e2d] mb-3">Alianzas estratégicas</h3>
              <p class="text-page-text leading-7">Trabajamos con universidades y proyectos educativos para amplificar el impacto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
