import axios from "axios";

export default axios.create({
    baseURL: "http://test-back.dokku.moneyfesto.ru/api/front",
})