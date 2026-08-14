export const ApiConstants = {
    URL_LOGIN: "/oauth2/login/",
    URL_AUTHORIZE: "/oauth2/authorize/",
    URL_ACCESS_TOKEN: "/oauth2/access_token/",
    URL_EXCHANGE_TOKEN: "/oauth2/exchange_access_token/{auth_type}/",
    GET_USER_PROFILE: "/api/mobile/v0.5/my_user_info",
    URL_REVOKE_TOKEN: "/oauth2/revoke_token/",
    URL_REGISTRATION_FIELDS: "/user_api/v1/account/registration",
    URL_VALIDATE_REGISTRATION_FIELDS: "/api/user/v1/validation/registration",
    URL_REGISTER: "/api/user/v1/account/registration/",
    URL_REGISTER_BROWSER: "/register",
    URL_PASSWORD_RESET: "/password_reset/",

    GRANT_TYPE_PASSWORD: "password",
    GRANT_TYPE_CODE: "authorization_code",

    TOKEN_TYPE_BEARER: "Bearer",
    TOKEN_TYPE_JWT: "jwt",
    TOKEN_TYPE_REFRESH: "refresh_token",

    ACCESS_TOKEN: "access_token",

    CLIENT_ID: "client_id",
    EMAIL: "email",
    NAME: "name",
    PASSWORD: "password",
    PROVIDER: "provider",

    AUTH_TYPE_GOOGLE: "google-oauth2",
    AUTH_TYPE_FB: "facebook",
    AUTH_TYPE_MICROSOFT: "azuread-oauth2",
    AUTH_TYPE_BROWSER: "browser",

    COURSE_KEY: "course_key",

    RegistrationFields: {
        HONOR_CODE: "honor_code",
        MARKETING_EMAILS: "marketing_emails_opt_in",
    },

    BrowserLogin: {
        REDIRECT_HOST: "oauth2Callback",
        CODE_QUERY_PARAM: "code",
        RESPONSE_TYPE: "code",
    }
} as const;
