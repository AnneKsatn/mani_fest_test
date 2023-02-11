<template>
    <div class="group">
        <input 
            :value="modelValue" 
            :placeholder="placeholder" 
            :type="type" 
            required
            
            @input="updateInput" />
        <label>Код из СМС</label>
    </div>
</template>

<script>
export default {
    name: 'mf-input',
    props: {
        placeholder: {
            type: String,
        },
        type: {
            type: String,
        },
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style>
.group {
    position: relative;
    margin-bottom: 45px;
}

input {
    font-size: 18px;
    background: #F6F8FF;

    width: 100%;
    height: 76px;

    border: none;
    border-radius: 8px;
    padding: 38px 16px 16px 16px;
}

input:placeholder-shown {
    padding: 0px;
}

input:focus {
    outline: none;
    padding: 38px 16px 16px 16px;
}

input::placeholder {
    text-align: center;
}


/* LABEL ======================================= */
label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 16px;
    top: 16px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    color: transparent;
}

input:focus~label,
input:valid~label {
    font-size: 14px;
    color: #5264AE;
}

input:focus::placeholder {
    color: transparent;
}
</style>