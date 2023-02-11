<template>
    <div>
        <mf-input v-model="smsCode" type="number" :placeholder="'Введите код из смс'" />
        <mf-button :backgroundColor="'#3662FA'" :backgrounDisabledColor="'#BBCAFD'"
            :disabled="processingRequest || !smsCode || smsCode.length != 4" @click="sign">Подписать
        </mf-button>
        <div class="resign" :disabled="processingRequest"><a ref="/">Отправить код повторно</a></div>
    </div>
</template>

<script>
import MfButton from "@/components/UI/MfButton.vue";
import MfInput from "@/components/UI/MfInput.vue";

export default {

    data() {
        return {
            processingRequest: false,
            smsCode: null,
        }
    },

    components: {
        MfButton,
        MfInput
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
  color: #3662FA;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
} 

</style>