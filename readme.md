
# Home Test - Shaw and Partners

How Istall?

cd back-end && npm i
npm start

cd front-end && npm i
npm run start

Front- End 

![image](https://github.com/LFSOFTWARE/home-test-parteners/assets/78454799/4f292ce4-ef0f-486a-92c6-f864a391d18f)




## Documentation of API

#### Create Users By File

```http
  post /api/files
```

| Parâmetro   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `file` | `file` | **mandatory** |

#### Retorna um item

```http
  GET /api/users
```

| Parâmetro   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `page`      | `int` |  page to fetch |    
| `limit`      | `int` | size of payload |
| `q`      | `int` |is a param to filter   |



