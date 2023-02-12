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
// import SignDocumentService from "@/services/SignDocumentService";

export default {
    name: 'request-code',
    data() {
        return {
            processingRequest: false
        }
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


            // SignDocumentService.requestCode()
            // .then(response => console.log(response))
            // .catch(error => console.log(error.response.data.error))
        }
    }

}
</script>

<style>

</style>