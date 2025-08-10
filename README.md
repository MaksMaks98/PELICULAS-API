# PELICULAS-API

# API Control de Películas Vistas

API REST en Node.js y MongoDB para registrar y valorar películas vistas. Incluye CRUD y un endpoint para recomendar películas según el género más visto.

---

## Nota para prueba

La base `peliculasdb` y la colección `peliculas` se crean automáticamente.  
El servidor precarga películas desde `peliculas.json` solo si la colección está vacía.

## Información técnica
Node.js versión: v22.17.1
MongoDB versión: 8.0.12
---

## Endpoints

- `GET /peliculas`  
- `POST /peliculas`  
- `PUT /peliculas/id`  
- `DELETE /peliculas/id`  
- `GET /peliculas/recomendadas`

---

Macarena Martín
