<template>
  <canvas ref="mycanvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HellowHoosk from '../hooks/HelloWorld.js'
let mycanvas = ref(null); 
let k = 1;
let b =0 ;
onMounted(()=>{
  HellowHoosk( mycanvas,k,b)
})
</script>

<style>
  canvas{
    border :1px black solid;
  }
</style>