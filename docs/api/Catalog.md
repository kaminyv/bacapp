# Catalog API documentation

## */api/auth/catalog*
Список всех мастеров.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": [
        {
            "id": "int",
            "master": {
                "id": "int",
                "name": "string",
                "email": "string",
                "avatar": "string",
                "phone": "string"
            },
            "city": "string",
            "address": "string",
            "cover": "string",
            "phone": "string",
            "rating": "int",
            "service": [
                {
                    "id": "int",
                    "name": "string",
                    "price": "float",
                    "time": "time"
                },
                {
                    "id": "int",
                    "name": "string",
                    "price": "float",
                    "time": "time"
                }
            ]
        }
    ],
    "links": {
        "first": "string",
        "last": "string",
        "prev": "string",
        "next": "string"
    },
    "meta": {
        "current_page": "int",
        "from": "int",
        "last_page": "int",
        "links": [
            {
                "url": "string",
                "label": "string",
                "active": "boolean"
            },
            {
                "url": "string",
                "label": "string",
                "active": "boolean"
            },
            {
                "url": "string",
                "label": "string",
                "active": "boolean"
            }
        ],
        "path": "string",
        "per_page": "int",
        "to": "int",
        "total": "int"
    }
}
```

## */api/auth/catalog/{workshop}*
Выводит мастерскую.

{workshop} - id мастерской.

**Type:** *GET*

**Request:**

**Response:**

```json
{
    "data": [
        {
            "id": "int",
            "master": {
                "id": "int",
                "name": "string",
                "email": "string",
                "avatar": "string",
                "phone": "string"
            },
            "city": "string",
            "address": "string",
            "cover": "string",
            "phone": "string",
            "rating": "int",
            "service": [
                {
                    "id": "int",
                    "name": "string",
                    "price": "float",
                    "time": "time"
                },
                {
                    "id": "int",
                    "name": "string",
                    "price": "float",
                    "time": "time"
                }
            ]
        }
    ]
}
```
