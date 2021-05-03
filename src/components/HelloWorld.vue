<template>
  <h1>{{ doubleCount }}</h1>
  <h2>{{ state }}</h2>
  <div>
    <button @click="increment()">Increment</button>
    <button @click="resetCount()">Reset Count</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useMainStore } from '../stores/useMainStore';
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const main = useMainStore();

    return {
      main,
      state: computed(() => main.counter),
      doubleCount: computed(() => main.doubleCount),
      resetCount: main.reset,
      increment: main.increment,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
