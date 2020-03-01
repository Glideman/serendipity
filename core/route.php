<?php

class Route {

    static function start() {

        // контроллер и действие по умолчанию
        $controller_name = 'play';
        $action_name = 'default';


        // обязательный логин на сайт (логин в игру пока не предусмотрен)
        //if( isset($_SESSION['userid'])) {

            // разбиваем ЮРИ
            $url = explode('?', $_SERVER['REQUEST_URI']);
            $routes = explode('/', $url[0]);


            // получаем имя контроллера
            if ( !empty($routes[1]) )
                $controller_name = strtolower($routes[1]);


            // получаем имя экшена
            if ( !empty($routes[2]) )
                $action_name = strtolower($routes[2]);
        /*} else {
            $controller_name = 'auth';
            $action_name = 'default';
        }*/


        // добавляем префиксы
        $model_name = 'model_'.$controller_name;
        $controller_name = 'controller_'.$controller_name;
        $action_name = 'action_'.$action_name;


        // подключаем файл с классом модели, если такой есть
        $model_path = 'model/'.$model_name.'.php';

        if(file_exists($model_path))
            include $model_path;


        // подключаем файл с классом контроллера
        $controller_path = 'controller/'.$controller_name.'.php';
        if(!file_exists($controller_path)) {
            $controller_name = 'controller_404';
            $controller_path = 'controller/'.$controller_name.'.php';}
        include $controller_path;


        // создаем контроллер
        $controller = new $controller_name;


        // вызываем метод контроллера
        if(!method_exists($controller, $action_name)) {
            $action_name = 'e_wrongaction';}
        $controller->$action_name();
    }

}