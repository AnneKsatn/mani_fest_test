<template>
    <!-- <a ref="/"><slot></slot></a> -->
    <a><slot></slot></a>
</template>

<script>
export default {
    name: 'mf-link'
}
</script>

<style scoped>
a {
    color: #3662FA;
    font-weight: 500;
    font-size: 16px;
} 
</style>