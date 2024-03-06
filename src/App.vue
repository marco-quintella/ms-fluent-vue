<script setup lang="ts">
import { MsButtonAppearance, MsButtonShape, MsButtonSize } from '../lib/components/ms-button/ms-button.types'
import MsButton from '../lib/components/ms-button/ms-button.vue'
</script>

<template>
  <MsButton>Teste</MsButton>
  <MsButton :appearance="MsButtonAppearance.Outline">
    Outline
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Primary">
    Primary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Secondary">
    Secondary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Subtle">
    Subtle
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Transparent">
    Transparent
  </MsButton>

  <br><br>

  <MsButton :shape="MsButtonShape.Circular">
    Teste
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Outline" :shape="MsButtonShape.Circular">
    Outline
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Primary" :shape="MsButtonShape.Circular">
    Primary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Secondary" :shape="MsButtonShape.Circular">
    Secondary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Subtle" :shape="MsButtonShape.Circular">
    Subtle
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Transparent" :shape="MsButtonShape.Circular">
    Transparent
  </MsButton>

  <br><br>

  <MsButton :shape="MsButtonShape.Square">
    Teste
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Outline" :shape="MsButtonShape.Square">
    Outline
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Primary" :shape="MsButtonShape.Square">
    Primary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Secondary" :shape="MsButtonShape.Square">
    Secondary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Subtle" :shape="MsButtonShape.Square">
    Subtle
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Transparent" :shape="MsButtonShape.Square">
    Transparent
  </MsButton>

  <br><br>

  <MsButton :size="MsButtonSize.Small">
    Teste
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Outline" :size="MsButtonSize.Small">
    Outline
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Primary" :size="MsButtonSize.Small">
    Primary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Secondary" :size="MsButtonSize.Small">
    Secondary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Subtle" :size="MsButtonSize.Small">
    Subtle
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Transparent" :size="MsButtonSize.Small">
    Transparent
  </MsButton>

  <br><br>

  <MsButton :size="MsButtonSize.Large">
    Teste
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Outline" :size="MsButtonSize.Large">
    Outline
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Primary" :size="MsButtonSize.Large">
    Primary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Secondary" :size="MsButtonSize.Large">
    Secondary
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Subtle" :size="MsButtonSize.Large">
    Subtle
  </MsButton>
  <MsButton :appearance="MsButtonAppearance.Transparent" :size="MsButtonSize.Large">
    Transparent
  </MsButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
