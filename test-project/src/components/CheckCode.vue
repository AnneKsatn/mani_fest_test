<template>
    <div>
        <div class="input-code">
            <mf-input v-model="smsCode" type="number" :placeholder="'Введите код из СМС'" />
        </div>
        <mf-button :backgroundColor="'#3662FA'" :backgrounDisabledColor="'#BBCAFD'"
            :disabled="processingRequest || !smsCode || smsCode.length != 4" @click="sign">Подписать
        </mf-button>
        <button class="reqestCode" :disabled="processingRequest" @click="requestCode">
            <mf-link>Отправить код повторно</mf-link>
        </button>
    </div>
</template>

<script>
// import SignDocumentService from "@/services/SignDocumentService";

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
        },

        requestCode(){
            console.log("request code")
                            // SignDocumentService.requestCode()
                // .then(response => console.log(response))
                // .catch(error => console.log(error.response.data.error))
        }
    }
}
</script>

<style>

.input-code {
    margin-bottom:20px;
}
.reqestCode {
    margin-top: 12px;
    padding: 16px;
    cursor: pointer;
    border: none;
    background-color: white;
}
</style>