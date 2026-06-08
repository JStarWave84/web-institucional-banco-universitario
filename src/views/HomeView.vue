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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >El Banco de la Nueva Generación</span
        >
        <h1 class="font-extrabold text-[42px] md:text-[72px] leading-11 md:leading-18">
          Tu futuro <br />
          <span class="text-[#00928b]">comienza aquí</span>
        </h1>

        <div class="pt-2 w-full md:w-lg">
          <p class="text-[18px] md:text-[20px] leading-7 text-page-text">
            Diseñado específicamente para el ecosistema académico. Gestiona tus finanzas, recibe tu
            beca y paga tu matrícula con la agilidad que tu vida universitaria exige.
          </p>
        </div>

        <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <router-link
            to="/bancaenlinea/crear-cuenta"
            class="bg-brand-primary text-white font-bold leading-7 px-8 py-4 rounded-4xl shadow-lg hover:bg-brand-secondary transition-colors w-full sm:w-auto text-center"
          >
            Abre tu cuenta ahora
          </router-link>
          <a
            href="#"
            class="bg-gray-200 text-brand-primary font-bold leading-7 px-8 py-4 flex items-center justify-center gap-2 rounded-4xl hover:bg-brand-primary hover:text-white transition-colors w-full sm:w-auto"
          >
            <CirclePlay /> Ver tutorial
          </a>
        </div>
      </div>
      <div>
        <img
          src="../assets/img/hero-image.jpg"
          alt="Imagen de estudiantes universitarios usando el banco"
          class="w-full rounded-[48px] shadow-lg object-cover"
        />
        <!-- Highlight Card -->
        <div
          class="rounded-4xl shadow-lg px-6 py-6 flex gap-4 relative mx-auto lg:mx-0 lg:-left-6 -top-18 bg-white w-81"
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
    <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
      <div class="hidden lg:block lg:w-1/2">
        <img
          src="../assets/img/education-image.jpg"
          alt="Imagen de estudiantes universitarios aprendiendo sobre finanzas"
          class="rounded-[48px] shadow-lg object-cover"
        />
      </div>

      <div class="flex flex-col w-full lg:w-1/2 justify-center gap-4">
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
    <div class="px-6 flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
      <div class="max-w-full lg:max-w-120">
        <h2 class="font-bold text-[24px] leading-8 text-brand-primary">
          Únete a nuestras redes sociales
        </h2>
        <p class="text-page-text text-[16px] leading-6">
          Entérate de sorteos, eventos y nuevos beneficios cada semana.
        </p>
      </div>
      <div class="w-full lg:w-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="flex items-center gap-3">
            <a
              href="https://www.facebook.com/bancouniversitariove"
              class="bg-white rounded-full shadow-sm p-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-brand-primary"
                viewBox="0 0 640 640"
              >
                <path
                  d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
                /></svg
            ></a>
            <div class="flex flex-col">
              <span
                class="font-bold leading-4 text-[12px] text-brand-primary tracking-[0.6px] uppercase"
                >Facebook</span
              >
              <span class="leading-5 text-[14px] text-brand-primary">@bancouniversitariove</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bancouniversitariove"
              class="bg-white rounded-full shadow-sm p-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-brand-primary"
                viewBox="0 0 640 640"
              >
                <path
                  d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                /></svg
            ></a>
            <div class="flex flex-col">
              <span
                class="font-bold leading-4 text-[12px] text-brand-primary tracking-[0.6px] uppercase"
                >Instagram</span
              >
              <span class="leading-5 text-[14px] text-brand-primary">@bancouniversitariove</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://www.x.com/bancouniversitariove"
              class="bg-white rounded-full shadow-sm p-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-brand-primary"
                viewBox="0 0 640 640"
              >
                <path
                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                /></svg
            ></a>
            <div class="flex flex-col">
              <span
                class="font-bold leading-4 text-[12px] text-brand-primary tracking-[0.6px] uppercase"
                >X</span
              >
              <span class="leading-5 text-[14px] text-brand-primary">@bancouniversitariove</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
