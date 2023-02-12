# test-project

## INTRO
На запрос кода сервер выдает ошибку "документ еще не сформирован".
Логика работы с сервером частично проработана, но закомментирована.
Чтобы показать работспособность системы сделана имитация задержки ответа сервера.

Аппка использует куки для хранения текущего состояния.
Существует два состояния:
1. Код отправлен без ошибок и срок годности не истек (установила минуту). Тогда при перезагрузке всегда будет открываться фрейм с вводом кода
2. Код не отправлен. Тогда всегда будет открываться фрейм без инпута.

Состояния реализованы через vuex

В папке Components UI расположена UI - бибилеотека

Используемые библиотеки:
1. js-cookie для работы с куки
2. vuex-persistedstate для предзагрузки состояния из кук

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
