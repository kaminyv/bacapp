# Service API documentation

## */api/master/service*
Выводит услуги мастера.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": [
        {
            "id": "int",
            "name": "string",
            "price": "int",
            "time": "time H:i"
        }
    ]
}
```

## */api/master/service*
Создание услугу.

**Type:** *POST*

**Request:**
```json
{
    "name": "string",
    "price": "int",
    "time": "time H:i"      
}
```

**Response:**

```json
{
    "data": {
        "id": "int",
        "name": "string",
        "price": "int",
        "time": "time H:i"
    }
}
```

## */api/master/service/{service_id}*
Вывод услуги по id.

**Type:** *GET*

**Response:**

```json
{
    "data": {
        "id": "int",
        "name": "string",
        "price": "int",
        "time": "time H:i"
    }
}
```

## */api/master/service/{service_id}*
Изменение услуги.

**Type:** *POST*

**Request:**
```json
{
    "name": "string",
    "price": "int",
    "time": "time H:i",
    "_method": "PUT"
}
```
**Response:**

```json
{
    "data": {
        "id": "int",
        "name": "string",
        "price": "int",
        "time": "time H:i"
    }
}
```

## */api/master/service/{service_id}*
Удаление услуги.

**Type:** *POST*

**Request:**
```json
{
    "_method": "DELETE"
}
```
**Response:**

```json
{
    "message": "boolean"
}
```
