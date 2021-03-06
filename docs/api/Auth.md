# Auth API documentation

## */api/auth/register*
Регистрация нового пользователя.

**Type:** *POST*

**Request:**
```json
{
    "name" : "string",
    "email" : "string",
    "password" : "string",
    "is_master" : "boolean"
}
```
**Response:**

```json
{
    "token" : "string"
}
```
## */api/auth/token*
Получение токена для существующего пользователя.

**Type:** *POST*

**Request:**
```json
{
    "email" : "string",
    "password" : "string"
}
```

**Response:**
```json
{
    "token" : "string"
}
```

## */api/auth/logout*
Выход пользователя.

Удаляется token на для текущего сеанса.

**Type:** *POST*

**Request:**
*Header Token*

**Response:**
```json
{
    "message" : "string"
}
```

## */api/auth/logout-all*
Выход пользователя.

Удаляются token на для всех сеанса.

**Type:** *POST*

**Request:**
*Header Token*

**Response:**
```json
{
    "message" : "string"
}
```
