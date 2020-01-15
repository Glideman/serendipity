<?php

class Controller {

    public $model;
    public $view;

    function __construct() {
        $this->view = new View();
        $this->model = null;
    }

    function e_wrongaction() {
        http_response_code(404);
        $this->view->generate('404.html', null);
    }
}