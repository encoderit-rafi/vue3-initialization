<template>
  <h1>Hello App!</h1>
  X:{{ x }},
  Y:{{ y }}
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <v-btn color="success" @click="onClickCounterButton">
      <v-icon>mdi-plus</v-icon>
      PINIA: {{ counter.count }}</v-btn
    >
    <p>UUID: {{ uuidv4() }}</p>
  </p>
  <UnpluginVueComponents/>
  <P>Lodash truncate: {{ truncate(
  'GeeksforGeeks, is a computer science portal.', {
     'length':10,
   }
) }}</P>
  <router-view></router-view>
</template>

<script setup>
import { truncate } from 'lodash'; 
import { v4 as uuidv4 } from 'uuid';
import { useCounterStore } from "./store/counter";
import {  useMouse } from '@vueuse/core'

const counter = useCounterStore();
const onClickCounterButton = () => {
  counter.increment();
};
const unpluginAutoImport= ref('Unplugin-Auto-Import')
console.log("🚀 :: file: App.vue:24 :: unpluginAutoImport:", unpluginAutoImport.value)
const {x,y}=useMouse()
</script>

<style scoped></style>
./store/counter
