<script setup lang="ts">
import type { MsButtonProps } from './ms-button.types'
import { MsButtonIconPosition } from './ms-button.types'

defineProps<MsButtonProps>()
</script>

<template>
  <a>
    <span v-if="iconPosition !== MsButtonIconPosition.After && (!!icon)" :class="icon" />
    <slot v-if="!iconOnly" />
    <span v-if="iconPosition !== MsButtonIconPosition.After && (!!icon)" :class="icon" />
  </a>
</template>
