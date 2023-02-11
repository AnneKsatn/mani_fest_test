<template>
  <div class="page">
    <div class="page-title">Подписание документа</div>
    <div class="page-content">
      <button class="btn-read-doc">Читать документ</button>
      <ul>
        <li><span>Согласие на обработку персональных данных можно подписать, указав код из SMS </span></li>
        <li><span>Мы отправим код на Ваш номер +7 (999) 999-77-78. </span></li>
      </ul>

      <button v-if="!codeSended" @click="sendCode" class="btn-sign">Отправить код</button>

      <div v-else class="sign-document">
        <mf-input v-model="smsCode" type="number" :placeholder="'Введите код из смс'" />
        <button class="btn-sign" @click="sign" :disabled="!smsCode || smsCode.length != 4">Подписать</button>
        <div class="resign"><a ref="/">Отправить код повторно</a></div>
      </div>

      <div class="footer">Если вы обнаружили ошибку в информации о своих данных: Обратитесь в поддержку</div>
    </div>
  </div>
</template>

<script>
import MfInput from "@/components/UI/MfInput.vue";

export default {
  components: { MfInput },
  data() {
    return {
      codeSended: true,
      smsCode: null
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

<style>
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
  padding: 16px 20px;
  gap: 10px;
  width: 260px;
  height: 52px;
  background: #0CC572;
  border-radius: 8px;
  text-align: center;
  border: none;
  color: white;

  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  margin-bottom: 24px;
}

ul {
  list-style-position: inside;
  margin-bottom: 40px;
  font-size: 16px;
  list-style-type: disc;
  color: #828796
}

li {
  font-size: 26px;
}

li span {
  font-size: 16px;
}

.sign-document {
  width: 328px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  text-align: center;
}

.btn-sign {
  padding: 16px 20px;
  height: 52px;
  
  background: #3662FA;
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