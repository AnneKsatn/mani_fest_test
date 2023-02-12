<template>
    <div class="list">
        <div class="item">
            <div class="icon"></div>
            <div>Согласие на обработку персональных данных можно подписать, указав код из SMS</div>
        </div>
        <div class="item">
            <div class="icon"></div>
            <div>Мы отправим код на Ваш номер +7 (999) 999-77-78. </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list {
    font-size: 16px;
    color: #828796
}

.item {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.item:not(:last-child){
    margin-bottom: 16px;
}

.icon {
    background-image: url("../assets/circle.png");
    height: 8px;
    width: 8px;
    background-size: contain;
    margin-right: 8px;
}
</style>