<script setup>
import { computed } from 'vue'
import { ArrowUpRight, ArrowDownLeft } from '@lucide/vue'

const props = defineProps({
  transaction: {
    type: Object,
    required: true,
  },
})

const isIncome = computed(() => props.transaction.multiplier === 1)

const formattedDate = computed(() => {
  if (!props.transaction.created_at) return ''
  return new Intl.DateTimeFormat('es-VE', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(props.transaction.created_at))
})

const formattedAmount = computed(() => {
  const formatted = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(props.transaction.amount)

  return `${isIncome.value ? '+' : '-'} ${formatted}`
})
</script>

<template>
  <div class="flex justify-between items-center py-4 border-b border-gray-100 last:border-none">
    <div class="flex items-center gap-4">
      <div
        :class="[
          'w-11 h-11 rounded-xl flex justify-center items-center transition-colors',
          isIncome ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600',
        ]"
      >
        <component :is="isIncome ? ArrowDownLeft : ArrowUpRight" class="w-5 h-5" />
      </div>

      <div class="flex flex-col">
        <p class="font-bold text-[15px] text-slate-800">{{ transaction.description }}</p>
        <p class="text-[13px] text-gray-400 font-medium">{{ formattedDate }}</p>
      </div>
    </div>

    <div>
      <span :class="['font-bold text-[15px]', isIncome ? 'text-emerald-600' : 'text-red-600']">
        {{ formattedAmount }}
      </span>
    </div>
  </div>
</template>
