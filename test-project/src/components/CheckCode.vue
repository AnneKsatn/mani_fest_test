<template>
    <div>
        <mf-input v-model="smsCode" type="number" :placeholder="'Введите код из смс'" />
        <mf-button :backgroundColor="'#3662FA'" :backgrounDisabledColor="'#BBCAFD'"
            :disabled="processingRequest || !smsCode || smsCode.length != 4" @click="sign">Подписать
        </mf-button>
        <div class="resign" :disabled="processingRequest">
            <mf-link>Отправить код повторно</mf-link>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            processingRequest: false,
            smsCode: null,
        }
    },

    props: {
        modelValue: {
            type: String
        }
    },

    methods: {
        sign() {
            this.processingRequest = true
            setTimeout(() => {
                console.log("got answer")
                this.processingRequest = false;
                // this.$emit("update:modelValue", true)
            }, 1500)
        }
    }
}
</script>

<style>
.resign {
    margin-top: 12px;
    padding: 16px;
    cursor: pointer;
}
</style>