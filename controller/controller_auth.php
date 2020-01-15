<?php

class Controller_auth extends Controller {

    function __construct() {
        $this->view = new View();
    }

    function action_default() {
        $this->view->generate('auth.php', null);
    }

    function e_wrongaction() {
        http_response_code(404);
        $this->view->generate('404.html', null);
    }


}