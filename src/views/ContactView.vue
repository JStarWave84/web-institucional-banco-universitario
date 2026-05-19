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
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-12 mb-12">
    <main class="flex flex-col w-304 h-[1760.3px] w-max-302 gap-24">
      <!--Hero Section-->
      <section class="flex flex-col h-84 gap-6">
        <div class="flex items-center h-7 w-40.5 pt-1.5 pb-1.5 pr-4 pl-4 rounded-full bg-[#85F5ED]">
          <span class="font-['Manrope'] font-bold text-[12px] text-[#00504C] leading-4">
            CENTRO DE ATENCION
          </span>
        </div>

        <h1
          class="pt-[0.7px] font-['Plus_Jakarta_Sans'] font-extrabold text-[72px] text-[#004743] leading-18"
        >
          Tu oasis de calma en el <br /><span class="text-[#00928b]"> mundo financiero.</span>
        </h1>

        <div class="w-164">
          <p class="font-['Manrope'] font-normal text-[18px] text-[#3F4949] leading-[29.25px]">
            Estamos aquí para acompañar tu crecimiento académico y profesional. Si tienes dudas,
            propuestas o necesitas asistencia, nuestro equipo está listo para escucharte.
          </p>
        </div>
      </section>

      <!--ContactGrid Section-->
      <section class="grid grid-cols-12 grid-rows-1 gap-8 w-304 h-156">
        <!--Info Cards Columna-->
        <div class="flex flex-col w-[384px] h-156 pb-1.75 gap-6 col-start-9 col-span-4 row-start-1">
          <!--Direct Contact-->
          <div class="w-[384px] h-58 rounded-[32px] p-8 bg-[#004649]">
            <div class="flex flex-col w-80 h-42 gap-6">
              <h3
                class="w-80 h-8 rotate-0 opacity-100 font-['Plus_Jakarta_Sans'] font-bold text-2xl text-white leading-8 tracking-normal"
              >
                Contacto Directo
              </h3>

              <div class="flex w-80 h-11 gap-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#085F63]">
                  <Phone class="w-5.5 h-5.5 text-[#85F5ED]" />
                </div>

                <div class="flex flex-col w-[152.63px] h-11">
                  <span
                    class="w-[74.27px] h-4 font-['Manrope'] font-bold text-[12px] text-white/70 leading-4"
                  >
                    LLAMANOS
                  </span>
                  <span
                    class="w-[152.63px] h-7 font-['Manrope'] font-semibold text-[18px] text-white leading-7"
                  >
                    +58 212-555-5555
                  </span>
                </div>
              </div>

              <div class="flex w-80 h-11 gap-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#085F63]">
                  <Mail class="w-5.5 h-5.5 text-[#85F5ED]" />
                </div>

                <div class="flex flex-col w-[277.92px] h-11">
                  <span
                    class="w-[74.27px] h-4 font-['Manrope'] font-bold text-[12px] text-white/70 leading-4"
                  >
                    ESCRIBENOS
                  </span>
                  <span
                    class="w-[152.63px] h-7 font-['Manrope'] font-semibold text-[18px] text-white leading-7"
                  >
                    info@bancouniversitario.com.ve
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!--Social Media-->
          <div class="flex flex-col w-[384px] h-41 rounded-[32px] p-8 gap-6 bg-[#F2F4F4]">
            <h3 class="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#004649] leading-7">
              Redes Sociales
            </h3>
            <div class="flex gap-4">
              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white"
              >
                <Share2 class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white"
              >
                <Users class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white"
              >
                <Earth class="w-6 h-7 text-[#004649]" />
              </div>

              <div
                class="flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white"
              >
                <SquarePlay class="w-6 h-7 text-[#004649]" />
              </div>
            </div>
          </div>

          <!--Business Hours-->
          <div class="flex flex-col w-[384px] h-43.25 rounded-[32px] p-8 gap-4 bg-[#82F2EA]">
            <div class="flex w-80 h-7 gap-3">
              <div class="text-[#006F6A]"><Clock /></div>
              <h3
                class="flex h-7 font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#006F6A] leading-7"
              >
                Horario de Atención
              </h3>
            </div>

            <div>
              <div
                class="flex justify-between items-center w-[320px] h-7.25 pb-2 border-b border-b-[#006F6A1A]"
              >
                <div
                  class="font-['Manrope'] font-normal text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  Lunes a Viernes
                </div>
                <div
                  class="font-['Manrope'] font-bold text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  8:30 AM - 4:30 PM
                </div>
              </div>

              <div class="flex justify-between items-center w-[320px] h-7 pt-2 opacity-100">
                <div
                  class="font-['Manrope'] font-normal text-[14px] text-[#006F6A] leading-[20px] tracking-normal align-middle"
                >
                  Sabados
                </div>
                <div
                  class="font-['Manrope'] font-bold text-[14px] text-[#006F6A]/60 leading-[20px] tracking-normal align-middle"
                >
                  Cerrado
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Form-->
        <div
          class="w-full max-w-200 min-h-156 rounded-[32px] border border-gray-100/70 px-12 pt-12 pb-16 gap-8 col-start-1 col-span-8 row-start-1 shadow-[0px_20px_40px_-10px_#085F6314]"
        >
          <h2
            class="w-full h-auto mb-8 font-['Plus_Jakarta_Sans'] font-bold text-[30px] leading-9 tracking-normal align-middle text-[#004649]"
          >
            Envíanos un mensaje
          </h2>

          <form class="flex flex-col w-full max-w-176 gap-6">
            <!--Box Name|Mail-->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label
                  class="ml-1 font-['Manrope'] font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  class="w-full h-14 rounded-[32px] px-6 bg-[#F2F4F4] focus:outline-none focus:ring-2 focus:ring-[#3F4949]/20 transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label
                  class="ml-1 font-['Manrope'] font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  class="w-full h-14 bg-[#F2F4F4] rounded-[32px] px-6 focus:outline-none focus:ring-2 focus:ring-[#3F4949]/20 transition-all"
                />
              </div>
            </div>

            <!--Box More-->
            <div class="flex flex-col gap-2">
              <label
                class="ml-1 font-['Manrope'] font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase"
              >
                Asunto
              </label>
              <div class="w-full h-14 bg-[#F2F4F4] rounded-[32px] px-6"></div>
            </div>

            <!--Box Message-->
            <div class="flex flex-col gap-2">
              <label
                class="ml-1 font-['Manrope'] font-bold text-[12px] text-[#3F4949] tracking-[1.2px] uppercase"
              >
                Mensaje
              </label>
              <textarea
                placeholder="¿Cómo podemos ayudarte hoy?"
                class="w-full h-32 rounded-[32px] p-6 bg-[#F2F4F4] outline-none focus:ring-2 focus:ring-[#3F4949]/20 transition-all resize-none"
              ></textarea>
            </div>

            <!--Send Message-->
            <button
              class="flex items-center justify-center w-60.5 h-15 rounded-full gap-3 bg-linear-to-br from-[#004649] to-[#085F63] text-white hover:brightness-115"
            >
              <span class="font-['Manrope'] font-bold text-[18px]">Enviar Mensaje</span>
              <div class="flex items-center justify-center w-4.75 h-4">
                <SendHorizontal />
              </div>
            </button>
          </form>
        </div>
      </section>

      <!--Location Section-->
      <section class="grid grid-cols-2 grid-rows-1 w-304 h-152 rounded-[32px] bg-[#F2F4F4]">
        <!--Direccion Sede Principal-->
        <div
          class="flex flex-col w-152 h-152 pt-[197.25px] pr-16 pb-[197.25px] pl-16 row-start-1 col-start-1 row-span-1 col-span-1"
        >
          <h2 class="mb-6 font-['Plus_Jakarta_Sans'] font-bold text-[30px] leading-9">
            Nuestra Sede Principal
          </h2>

          <div class="flex mb-8 gap-4">
            <icons class="w-5 h-6.25 text-[#006A65]"><MapPin /></icons>
            <div class="w-84.75 h-24.25">
              <p class="font-['Manrope'] font-normal text-[20px] text-[#3F4949] leading-[32.5px]">
                Av. Universidad, Edificio Oasis, Piso 4. Municipio Libertador, Caracas 1010,
                Venezuela.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2"
          >
            <p
              class="gap-2 font-['Manrope'] font-bold text-[16px] text-[#006A65] leading-6 tracking-normal"
            >
              Ver en Google Maps
            </p>
            <div class="">
              <ArrowRight class="w-5 h-5 text-[#006A65]" />
            </div>
          </a>
        </div>

        <!--Mapa-->
        <div class="flex items-center justify-center relative w-152 h-152">
          <img src="../assets/img/map-caracas.png" alt="Mapa de Caracas" class="w-152 h-152" />

          <div class="absolute inset-0 rounded-tr-[32px] rounded-br-[32px] bg-[#0046491A]"></div>

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
