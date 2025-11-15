<script lang="ts" setup>
import { ref } from "vue";

const label = ref("from foo");
</script>

<template>
    <button>{{ label }}</button>
</template>
