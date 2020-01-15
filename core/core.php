<?php

// файлы ядра
include 'core/model.php';
include 'core/view.php';
include 'core/controller.php';

//session_start(); // сессия для регистрации / аутентификации пользователя

//include 'core/zadachnik.php';
//include 'models/core_model.php';

// роутер
include 'core/route.php';
Route::start(); // запускаем маршрутизатор