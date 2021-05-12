import Router from "express";
import PostController from "./PostController.js";

/*
Маршрутизация, чтобы вынести больше логики и сделать более читабельный код,
создан новый файл и классом PostController.js (PostController).
В котором лежат основные наши методы с запросами GET, PUT, UPDATE, DELETE (CRUD)
 */
const router = new Router();

router.post('/posts', PostController.create);

router.get('/posts', PostController.getAll) // все объекты
router.get('/post/:id', PostController.getOne) // по id (В бд)
router.put('/posts', PostController.update) // обновление
router.delete('/posts/:id', PostController.delete) // удаление


export default router;