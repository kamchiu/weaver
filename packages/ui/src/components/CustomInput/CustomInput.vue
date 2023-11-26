<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  foo: {
    type: String,
    required: true,
  },
  blabla: {
    type: String,
    default: 'Test',
  },
})

defineEmits([])

const textInput = ref(props.foo)
</script>

<template>
  <input v-model="textInput" type="text" class="border border-gray-50">
</template>
