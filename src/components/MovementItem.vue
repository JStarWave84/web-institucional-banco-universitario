<script setup>
import { computed } from 'vue'
import { ArrowUpRight, ArrowDownLeft } from '@lucide/vue'

const props = defineProps({
  movement: {
    type: Object,
    required: true,
  },
})

const isIncome = computed(() => props.movement.multiplier === 1)

const formattedTime = computed(() => {
  if (!props.movement.created_at) return ''
  const date = new Date(props.movement.created_at)
  return date.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: false })
})

const transactionType = computed(() => {
  return isIncome.value ? 'Transferencia recibida' : 'Pago con tarjeta'
})

const formattedAmount = computed(() => {
  const formatted = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(props.movement.amount)
  return `${isIncome.value ? '+' : '-'}${formatted}`
})

const formattedBalance = computed(() => {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(props.movement.balance)
})
</script>

<template>
  <li class="flex justify-between w-full h-20 p-4 rounded-xl shadow-sm bg-white">
    <div class="flex flex-1 min-w-0 h-12 gap-4">
      <div
        :class="[
          'flex items-center justify-center w-12 h-12 rounded-xl shrink-0',
          isIncome ? 'bg-[#006A65]/10' : 'bg-[#BA1A1A]/10',
        ]"
      >
        <component
          :is="isIncome ? ArrowDownLeft : ArrowUpRight"
          :class="isIncome ? 'text-[#006A65]' : 'text-[#BA1A1A]'"
        />
      </div>

      <div class="flex flex-col min-w-0 h-10.5 gap-0.5">
        <span class="h-6 text-[#191C1D] font-bold truncate">{{ movement.description }}</span>
        <span class="h-4 text-[#3F4949] text-[12px] whitespace-nowrap"
          >{{ formattedTime }} &bull; {{ transactionType }}</span
        >
      </div>
    </div>

    <div class="flex flex-col shrink-0 text-right">
      <span
        :class="['font-bold whitespace-nowrap', isIncome ? 'text-[#006A65]' : 'text-[#BA1A1A]']"
      >
        {{ formattedAmount }}
      </span>
      <span class="text-[#6F7979] text-[10px] font-bold whitespace-nowrap"
        >Saldo: {{ formattedBalance }}</span
      >
    </div>
  </li>
</template>
