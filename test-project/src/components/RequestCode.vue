<template>
    <mf-button 
        :backgroundColor="'#3662FA'" 
        :backgrounDisabledColor="'#BBCAFD'" 
        :disabled="processingRequest"
        @click="sendCode">
        Отправить код
    </mf-button>
</template>

<script>
import MfButton from "@/components/UI/MfButton.vue";

export default {
    name: 'request-code',
    data() {
        return {
            processingRequest: false
        }
    },

    components: {
        MfButton
    },

    props: {
        modelValue: {
            type: String
        }
    },

    methods: {
        sendCode() {
            this.processingRequest = true
            setTimeout(() => {
                console.log("got answer")
                this.processingRequest = false;
                this.$emit("update:modelValue", true)
            }, 1500)

            // axios.post('http://test-back.dokku.moneyfesto.ru/api/front/send_sign_code', {},
            //   {
            //     params: {
            //       token: "gAAAAABjvmCv3TVcQLaE3oHcxo3f-SJP8w3MfnBWmuUoGcWSfUHyw8aPyGK_owADfvsnMLbYqB6Rx3RBNTM85vwvC5VYxJ194w=="
            //     }
            //   }).then(response => console.log(response))
            //   .catch(error => console.log(error.response.data.error))
        }
    }

}
</script>

<style>

</style>