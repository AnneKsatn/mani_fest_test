import http from "@/services/http-common"

class SignDocumentService {
    requestCode() {
        return http.post(
            "/send_sign_code", {},
            {
                params: {
                    token: "gAAAAABjvmCv3TVcQLaE3oHcxo3f-SJP8w3MfnBWmuUoGcWSfUHyw8aPyGK_owADfvsnMLbYqB6Rx3RBNTM85vwvC5VYxJ194w=="
                }
            })
    }
}

export default new SignDocumentService()