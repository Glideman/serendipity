<?php

class Controller_play extends Controller {

    function action_default() {
        $this->view->generate('play.html', null);
    }

}