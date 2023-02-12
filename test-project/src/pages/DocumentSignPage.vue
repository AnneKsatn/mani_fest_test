<template>
  <div class="page">
    <div class="page-title">Подписание документа</div>
    <div class="page-content">

      <mf-button :backgroundColor="'#0CC572'" class="btn-read-doc">Читать документ</mf-button>
      <info-list class="info-list"></info-list>

      <component 
        :model-value="isCodeRequested"
        @update:model-value="changeCodeRequestStatus"
        :is='displayedComponent' class="sign-document"> </component>

      <div class="footer">Если вы обнаружили ошибку в информации о своих данных:  <mf-link>Обратитесь в поддержку</mf-link></div>
    </div>
  </div>
</template>

<script>
import MfButton from "@/components/UI/MfButton.vue";
import InfoList from '@/components/InfoList.vue';
import CheckCode from '@/components/CheckCode.vue';
import RequestCode from '@/components/RequestCode.vue';
import { mapState, mapMutations} from "vuex";

export default {
  components: {
    MfButton,
    InfoList,
    CheckCode,
    RequestCode
  },

  data() {
    return {}
  },

  computed: {
    ...mapState({
      isCodeRequested: state => state.isCodeRequested
    }),

    displayedComponent() {
      return this.isCodeRequested ? "check-code" : "request-code"
    }
  },

  methods: {
    ...mapMutations({
      changeCodeRequestStatus: 'changeCodeRequestStatus'
    }),
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

.footer {
  position: absolute;
  bottom: 24px;
  color: #828796;
}
</style>