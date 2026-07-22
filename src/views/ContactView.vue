<script setup>
import {
  MapPin,
  ArrowRight,
  GraduationCap,
  Phone,
  Mail,
  Clock,
  Share2,
  Earth,
  SquarePlay,
  Users,
  SendHorizontal,
} from '@lucide/vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { el: infoEl, isVisible: infoVisible } = useScrollReveal()
const { el: formEl, isVisible: formVisible } = useScrollReveal()
const { el: locationEl, isVisible: locationVisible } = useScrollReveal()
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-12 mb-12 px-4 md:px-0 overflow-x-hidden">
    <main class="flex flex-col h-auto md:h-[1760.3px] max-w-304 w-full gap-24">
      <!--Hero Section-->
      <section class="flex flex-col h-auto md:h-84 gap-6">
        <div
          class="flex items-center h-7 w-40.5 pt-1.5 pb-1.5 pr-4 pl-4 rounded-full bg-[#85F5ED]"
        >
          <span class="font-bold text-[12px] text-[#00504C] leading-4"> CENTRO DE ATENCION </span>
        </div>

        <h1 class="pt-[0.7px] font-extrabold text-[42px] md:text-[72px] text-[#004743] leading-[44px] md:leading-18">
          Tu oasis de calma en el <br /><span class="text-[#00928b]"> mundo financiero.</span>
        </h1>

        <div class="w-full md:w-164">
          <p class="font-normal text-[18px] text-page-text leading-[29.25px]">
            Estamos aquí para acompañar tu crecimiento académico y profesional. Si tienes dudas,
            propuestas o necesitas asistencia, nuestro equipo está listo para escucharte.
          </p>
        </div>
      </section>

      <!--ContactGrid Section-->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-304 h-auto md:h-156">
        <!--Info Cards Columna-->
        <div
          ref="infoEl"
          class="flex flex-col w-full md:w-[384px] h-auto md:h-156 pb-1.75 gap-6 col-span-1 md:col-start-9 md:col-span-4 md:row-start-1"
          :class="infoVisible ? 'animate-fade-in-right' : 'opacity-0'"
          style="will-change: transform, opacity"
        >
          <!--Direct Contact-->
          <div class="w-full md:w-[384px] h-auto md:h-58 rounded-4xl p-8 bg-[#004649]">
            <div class="flex flex-col w-full md:w-80 h-auto md:h-42 gap-6">
              <h3
                class="w-full md:w-80 h-auto md:h-8 rotate-0 opacity-100 font-bold text-2xl text-white leading-8 tracking-normal"
              >
                Contacto Directo
              </h3>

              <div class="flex w-full md:w-80 h-auto md:h-11 gap-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#085F63]">
                  <Phone class="w-5.5 h-5.5 text-[#85F5ED]" />
                </div>

                <div class="flex flex-col w-full max-w-[152.63px] h-11">
                  <span
                    class="w-full max-w-[74.27px] h-4 font-bold text-[12px] text-white/70 leading-4"
                  >
                    LLAMANOS
                  </span>
                  <span
                    class="w-full max-w-[152.63px] h-7 font-semibold text-[18px] text-white leading-7"
                  >
                    +58 212-555-5555
                  </span>
                </div>
              </div>

              <div class="flex w-full md:w-80 h-auto md:h-11 gap-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#085F63]">
                  <Mail class="w-5.5 h-5.5 text-[#85F5ED]" />
                </div>

                <div class="flex flex-col w-full max-w-[277.92px] h-11">
                  <span
                    class="w-full max-w-[74.27px] h-4 font-bold text-[12px] text-white/70 leading-4"
                  >
                    ESCRIBENOS
                  </span>
                  <span
                    class="w-full max-w-[152.63px] h-7 font-semibold text-[18px] text-white leading-7"
                  >
                    info@bancouniversitario.com.ve
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!--Social Media-->
          <div class="flex flex-col w-full md:w-[384px] h-auto md:h-41 rounded-4xl p-8 gap-6 bg-[#F2F4F4]">
            <h3 class="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#004649] leading-7">
              Redes Sociales
            </h3>
            <div class="flex flex-wrap gap-4">
              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <Share2 class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <Users class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <Earth class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <SquarePlay class="w-6 h-7 text-[#004649]" />
              </div>
            </div>
          </div>

          <!--Business Hours-->
          <div class="flex flex-col w-full md:w-[384px] h-auto md:h-43.25 rounded-[32px] p-8 gap-4 bg-[#82F2EA]">
            <div class="flex w-full md:w-80 h-auto md:h-7 gap-3">
              <div class="text-[#006F6A]"><Clock /></div>
              <h3
                class="flex h-auto md:h-7 font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#006F6A] leading-7"
              >
                Horario de Atención
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div
                class="flex justify-between items-center w-full max-w-[320px] h-7.25 pb-2 border-b border-b-[#006F6A1A]"
              >
                <div
                  class="font-normal text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  Lunes a Viernes
                </div>
                <div
                  class="font-bold text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  8:30 AM - 4:30 PM
                </div>
              </div>

              <div
                class="flex justify-between items-center w-full max-w-[320px] h-7 pt-2 opacity-100"
              >
                <div
                  class="font-normal text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  Sabados
                </div>
                <div
                  class="font-bold text-[14px] text-[#006F6A]/60 leading-[20px] tracking-normal align-middle"
                >
                  Cerrado
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Form-->
        <div
          ref="formEl"
          class="bg-white w-full max-w-full md:max-w-200 min-h-auto md:min-h-156 rounded-4xl border border-gray-100/70 px-6 md:px-12 pt-12 pb-16 gap-8 col-span-1 md:col-start-1 md:col-span-8 md:row-start-1 shadow-[0px_20px_40px_-10px_#085F6314]"
          :class="formVisible ? 'animate-fade-in-left' : 'opacity-0'"
          style="will-change: transform, opacity"
        >
          <h2
            class="w-full h-auto mb-8 font-['Plus_Jakarta_Sans'] font-bold text-[30px] leading-9 tracking-normal align-middle text-[#004649]"
          >
            Envíanos un mensaje
          </h2>

          <form class="flex flex-col w-full max-w-full md:max-w-176 gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="ml-1 font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  class="w-full h-14 rounded-[32px] px-6 bg-[#F2F4F4] focus:outline-none focus:ring-2 focus:ring-[#3F4949]/20 focus:scale-[1.01] transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="ml-1 font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  class="w-full h-14 bg-[#F2F4F4] rounded-[32px] px-6 focus:outline-none focus:ring-2 focus:ring-[#3F4949]/20 focus:scale-[1.01] transition-all"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="ml-1 font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase">
                Asunto
              </label>
              <div class="w-full h-14 bg-[#F2F4F4] rounded-[32px] px-6"></div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="ml-1 font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase">
                Mensaje
              </label>
              <textarea
                placeholder="¿Cómo podemos ayudarte hoy?"
                class="w-full h-32 rounded-[32px] p-6 bg-[#F2F4F4] outline-none focus:ring-2 focus:ring-[#3F4949]/20 focus:scale-[1.01] transition-all resize-none"
              ></textarea>
            </div>

            <button
              class="flex items-center justify-center w-60.5 h-15 rounded-full gap-3 bg-linear-to-br from-[#004649] to-[#085F63] text-white hover:from-[#085F63] hover:to-[#004649] transition-all"
            >
              <span class="font-bold text-[18px]">Enviar Mensaje</span>
              <div class="flex items-center justify-center w-4.75 h-4">
                <SendHorizontal />
              </div>
            </button>
          </form>
        </div>
      </section>

      <!--Location Section-->
      <section
        ref="locationEl"
        class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-full max-w-304 h-auto md:h-152 rounded-[32px] bg-[#F2F4F4]"
      >
        <div
          class="flex flex-col w-full md:w-152 h-auto md:h-152 pt-12 md:pt-[197.25px] pr-6 md:pr-16 pb-12 md:pb-[197.25px] pl-6 md:pl-16 row-start-1 col-start-1 row-span-1 col-span-1"
          :class="locationVisible ? 'animate-fade-in-left' : 'opacity-0'"
          style="will-change: transform, opacity"
        >
          <h2 class="mb-6 font-['Plus_Jakarta_Sans'] font-bold text-[30px] leading-9">
            Nuestra Sede Principal
          </h2>

          <div class="flex flex-col md:flex-row mb-8 gap-4">
            <icons class="w-5 h-6.25 text-[#006A65]"><MapPin /></icons>
            <div class="w-full md:w-84.75 h-auto">
              <p class="font-normal text-[20px] text-[#3F4949] leading-[32.5px]">
                Av. Universidad, Edificio Oasis, Piso 4. Municipio Libertador, Caracas 1010,
                Venezuela.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 group"
          >
            <p class="gap-2 font-bold text-[16px] text-[#006A65] leading-6 tracking-normal group-hover:text-brand-secondary transition-colors">
              Ver en Google Maps
            </p>
            <div class="">
              <ArrowRight class="w-5 h-5 text-[#006A65] group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div
          class="flex items-center justify-center relative w-full md:w-152 h-auto md:h-152"
          :class="locationVisible ? 'animate-fade-in-right' : 'opacity-0'"
          :style="{ animationDelay: '150ms', willChange: 'transform, opacity' }"
        >
          <img
            src="../assets/img/map-caracas.png"
            alt="Mapa de Caracas"
            class="w-full md:w-152 h-auto md:h-152"
          />

          <div
            class="absolute inset-0 bg-[#0046491A] rounded-bl-[32px] rounded-br-[32px] md:rounded-bl-none rounded-tr-[32px]"
          ></div>

          <div
            class="flex items-center justify-center absolute w-16 h-16 rounded-full bg-[#006A65]"
          >
            <div
              class="absolute inset-0 rounded-full shadow-[0px_25px_50px_-12px_#00000040] bg-[#FFFFFF01]"
            ></div>

            <div class="relative text-white">
              <GraduationCap class="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
