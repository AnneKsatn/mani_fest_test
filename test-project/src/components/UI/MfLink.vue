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
    font-size: 16px;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
} 
</style>