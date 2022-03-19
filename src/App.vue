<script setup>
  import { useCounterStore } from './store.js'
const counter = useCounterStore()

</script>
<template>
  <h1>test state persis</h1>
  <h3>{{counter.count}}</h3>
  <button @click="counter.increment()">increment</button>
</template>