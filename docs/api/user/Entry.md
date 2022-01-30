# Entry API documentation

## */api/user/entry/past*
Выводит прошедшие записи клиента к мастеру.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": [
        {
            "id": "int",
            "service": {
                "id": "int",
                "name": "string",
                "price": "int",
                "time": "time"
            },
            "date": "data",
            "time": "time"
        }
    ]
}
```

## */api/user/entry/current*
Выводит текущие записи клиента к мастеру.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": [
        {
            "id": "int",
            "service": {
                "id": "int",
                "name": "string",
                "price": "int",
                "time": "time"
            },
            "date": "data",
            "time": "time"
        }
    ]
}
```

## */api/user/entry*
Запись клиента к мастеру.

**Type:** *POST*

**Request:**
```json
{
    "service_id" : "int",
    "date" : "string",
    "time" : "string"
}
```
**Response:**

```json
{
    "message": "string"
}
```
