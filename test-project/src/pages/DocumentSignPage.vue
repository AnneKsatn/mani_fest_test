<template>
  <div class="page">
    <div class="page-title">Подписание документа</div>
    <div class="page-content">
      
      <mf-button
          :backgroundColor="'#0CC572'"
          class="btn-read-doc"
          >Читать документ
        </mf-button>

      <info-list class="info-list"></info-list>

      <mf-button
          v-if="!codeSended"
          :backgroundColor="'#3662FA'"
          @click="sendCode"
          class="sign-document"
          >Отправить код
        </mf-button>

      <div v-else class="sign-document">
        <mf-input v-model="smsCode" type="number" :placeholder="'Введите код из смс'" />
        <mf-button 
          :backgroundColor="'#3662FA'"
          :backgrounDisabledColor="'#BBCAFD'" 
          :disabled="!smsCode || smsCode.length != 4"
          @click="sign" 
          >Подписать
        </mf-button>

        <div class="resign"><a ref="/">Отправить код повторно</a></div>
      </div>

      <div class="footer">Если вы обнаружили ошибку в информации о своих данных: Обратитесь в поддержку</div>
    </div>
  </div>
</template>

<script>
import MfInput from "@/components/UI/MfInput.vue";
import MfButton from "@/components/UI/MfButton.vue";
import InfoList from '@/components/InfoList.vue';

export default {
  components: { 
    MfInput,
    MfButton,
    InfoList
  },
  
  data() {
    return {
      codeSended: false,
      smsCode: null,
      currentComponent: 'send-code'
    }
  },

  methods: {
    sendCode() {
      this.codeSended = true;
    },
    sign() {
      console.log("SIGNED")
    }
  },

  watch: {
    smsCode(newVal) {
      console.log(newVal)
    }
  }
}
</script>

<style scoped>
.page {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.page-title {
  margin-bottom: 20px;
  flex-grow: 0;
  font-weight: 500;

  font-size: 18px;
  line-height: 120%;
  color: #3A3D51;
}

.page-content {
  width: 100%;
  height: auto;
  min-height: 100%;
  background-color: white;
  padding: 20px;
  flex-grow: 1;

  position: relative
}

.btn-read-doc {
  width: 260px;
  margin-bottom: 24px;
}

.info-list {
  margin-bottom: 40px;
}

.sign-document {
  width: 328px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  text-align: center;
}

.resign {
  margin-top: 12px;
  padding: 16px;
  color: #3662FA;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}

.footer {
  position: absolute;
  bottom: 24px;
}
</style>