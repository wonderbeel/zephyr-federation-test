<script lang="ts" setup>
import { ref } from "vue";

const label = ref("from bar");
</script>

<template>
    <label>{{ label }}</label>
</template>
