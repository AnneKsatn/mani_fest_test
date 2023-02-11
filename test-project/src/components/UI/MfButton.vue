<template>
    <button class="btn" 
     :style= "[disabled ? { background: backgrounDisabledColor } : { background: backgroundColor }]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String
        },
        backgrounDisabledColor: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    },

    watch: {
        disabled(newVal) {
            console.log(newVal)
        }
    }

}
</script>

<style scoped>
.btn {
    padding: 16px 20px;
    height: 52px;

    border-radius: 8px;
    border: 0px;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;

    text-align: center;
}

.btn-sign:disabled {
    background: #BBCAFD;
}
</style>