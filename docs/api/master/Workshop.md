# Workshop API documentation

## */api/master/workshop*
Выводит мастерскую.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": {
        "id": "int",
        "user_id": "int",
        "city": "string",
        "address": "string",
        "description": "text",
        "cover": "string",
        "phone": "string",
        "rating": "int"
    }
}
```

## */api/master/workshop*
Создание мастерской.

**Type:** *POST*

**Request:**
```javascript
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('cover', fs.createReadStream('/path/file.png'));

var config = {
    method: 'post',
    url: '/api/master/workshop/store?city=Город&address=Адрес&description=Описание&phone=Телефон',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer token',
        ...data.getHeaders()
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

```

**Response:**

```json
{
    "data": {
        "id": "int",
        "user_id": "int",
        "city": "string",
        "address": "string",
        "description": "text",
        "cover": "string",
        "phone": "string",
        "rating": "int"
    }
}
```

## */api/master/workshop*
Изменение мастерской.

**Type:** *POST*

**Request:**
```javascript
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('cover', fs.createReadStream('/path/file.png'));

var config = {
    method: 'post',
    url: '/api/master/workshop/update?city=Город&address=Улица&description=Описание&phone=Телефон&_method=put',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer token',
        ...data.getHeaders()
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

```
**Response:**

```json
{
    "data": {
        "id": "int",
        "user_id": "int",
        "city": "string",
        "address": "string",
        "description": "text",
        "cover": "string",
        "phone": "string",
        "rating": "int"
    }
}
```
