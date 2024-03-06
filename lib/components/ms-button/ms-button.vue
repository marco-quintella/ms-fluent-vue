<script setup lang="ts">
import { computed } from 'vue'
import type { MsButtonProps } from './ms-button.types'
import { MsButtonAppearance, MsButtonIconPosition, MsButtonShape, MsButtonSize } from './ms-button.types'

const props = withDefaults(defineProps<MsButtonProps>(), {
  appearance: MsButtonAppearance.Secondary,
  as: 'button',
  iconPosition: MsButtonIconPosition.Before,
  shape: MsButtonShape.Rounded,
  size: MsButtonSize.Medium,
})

const classes = computed(() => {
  const base = ['ms-button']
  props.appearance && base.push(`ms-button-${props.appearance}`)
  props.shape && base.push(`ms-button-${props.shape}`)
  props.size && base.push(`ms-button-${props.size}`)
  return base
})
</script>

<template>
  <a :class="classes">
    <span v-if="iconPosition !== MsButtonIconPosition.After && (!!icon)" :class="icon" />
    <slot v-if="!iconOnly" />
    <span v-if="iconPosition !== MsButtonIconPosition.After && (!!icon)" :class="icon" />
  </a>
</template>

<style lang="sass">
@import '../../css/component/button'

.ms-button
  align-items: center
  box-sizing: border-box
  display: inline-flex
  justify-content: center
  text-decoration: none
  vertical-align: middle

  margin: 0
  overflow: hidden

  background-color: var(--ms-color-neutral-background-1)
  color: var(--ms-color-neutral-foreground-1)
  border: var(--ms-stroke-width-thin) solid var(--ms-color-neutral-stroke-1)

  font-family: var(--ms-font-family-base)
  outline: none

  &:hover
    background-color: var(--ms-color-neutral-background-1-hover)
    border-color: var(--ms-color-neutral-stroke-1-hover)
    color: var(--ms-color-neutral-foreground-1-hover)
    cursor: pointer

  &:hover:active
    background-color: var(--ms-color-neutral-background-1-pressed)
    border-color: var(--ms-color-neutral-stroke-1-pressed)
    color: var(--ms-color-neutral-foreground-1-pressed)

    outline-style: none

  padding: var(--ms-button-spacing-medium) var(--ms-spacing-horizontal-m)
  min-width: 96px
  border-radius: var(--ms-border-radius-medium)

  font-size: var(--ms-font-size-base-300)
  font-weight: var(--ms-font-weight-semibold)
  line-height: var(--ms-line-height-base-300)

  transition-duration: var(--ms-duration-faster)
  transition-property: background, border, color
  transition-timing-function: var(--ms-curve-easy-ease)

  @media screen and (prefers-reduced-motion: reduce)
    transition-duration: .01ms

  &:focus
    border-color: var(--ms-color-stroke-focus-2)
    broder-radius: var(--ms-border-radius-medium)
    border-width: 1px
    outline: var(--ms-stroke-width-thin) solid var(--ms-color-transparent-stroke)
    box-shadow: 0 0 0 var(--box-shadow-stroke-width-thin-moz) var(--ms-color-stroke-focus-2) inset
    z-index: 1

  @supports (-moz-appearance:button)
    &:focus
      box-shadow: 0 0 0 var(--box-shadow-stroke-width-thin-moz) var(--ms-color-stroke-focus-2) inset

.ms-button-icon
  align-items: center
  display: inline-flex
  justify-content: center

  font-size: 20px
  height: 20px
  width: 20px

  --ms-icon-spacing: var(--ms-spacing-horizontal-s-nudge)

.ms-button-outline
  background-color: var(--ms-color-transparent-background)

  &:hover
    background-color: var(--ms-color-transparent-background-hover)

  &:hover:active
    background-color: var(--ms-color-transparent-background-pressed)

.ms-button-primary
  background-color: var(--ms-color-brand-brackground)
  border-color: transparent
  color: var(--ms-color-foreground-on-brand)

  &:hover
    background-color: var(--ms-color-brand-brackground-hover)
    color: var(--ms-color-foreground-on-brand)
    border-color: transparent

  &:hover:active
    background-color: var(--ms-color-brand-brackground-pressed)
    color: var(--ms-color-foreground-on-brand)
    border-color: transparent

.ms-button-secondary
  // The secondary styles are exactly the same as the base styles.

.ms-button-subtle
  background-color: var(--ms-color-subtle-background)
  border-color: transparent
  color: var(--ms-color-neutral-foreground-2)

  &:hover
    background-color: var(--ms-color-subtle-background-hover)
    border-color: transparent
    color: var(--ms-color-neutral-foreground-2-hover)

    & .ms-icon-filled
      display: inline

    & .ms-icon-regular
      display: none

    & .ms-button-icon
      color: var(--ms-color-neutral-foreground-2-brand-hover)

  &:hover:active
    background-color: var(--ms-color-subtle-background-pressed)
    border-color: transparent
    color: var(--ms-color-neutral-foreground-2-pressed)

    & .ms-icon-filled
      display: inline

    & .ms-icon-regular
      display: none

    & .ms-button-icon
      color: var(--ms-color-neutral-foreground-2-brand-pressed)

.ms-button-transparent
  background-color: var(--ms-color-transparent-background)
  border-color: transparent
  color: var(--ms-color-neutral-foreground-2)

  &:hover
    background-color: var(--ms-color-transparent-background-hover)
    border-color: transparent
    color: var(--ms-color-neutral-foreground-2)

    & .ms-icon-filled
      display: inline

    & .ms-icon-regular
      display: none

  &:hover:active
    background-color: var(--ms-color-transparent-background-pressed)
    border-color: transparent
    color: var(--ms-color-neutral-foreground-2-brand-pressed)

    & .ms-icon-filled
      display: inline

    & .ms-icon-regular
      display: none

.ms-button-circular
  border-radius: var(--ms-border-radius-circular)

.ms-button-rounded
  // The borderRadius rounded styles are handled in the size variations

.ms-button-square
  border-radius: var(--ms-border-radius-none)

.ms-button-small
  min-width: 64px
  padding: var(--ms-button-spacing-small) var(--ms-spacing-horizontal-s)

  border-radius: var(--ms-border-radius-medium)

  font-size: var(--ms-font-size-base-200)
  font-weight: var(--ms-font-weight-regular)
  line-height: var(--ms-line-height-base-200)

.ms-button-small-with-icon
  padding-bottom: var(--ms-button-spacing-small-with-icon)
  padding-top: var(--ms-button-spacing-small-with-icon)

.ms-button-medium
  // defined in base styles.

.ms-button-large
  min-width: 96px
  padding: var(--ms-button-spacing-large) var(--ms-spacing-horizontal-l)

  border-radius: var(--ms-border-radius-medium)

  font-size: var(--ms-font-size-base-400)
  font-weight: var(--ms-font-weight-semibold)
  line-height: var(--ms-line-height-base-400)

.ms-button-large-with-icon
  padding-bottom: var(--ms-button-spacing-large-with-icon)
  padding-top: var(--ms-button-spacing-large-with-icon)
</style>
