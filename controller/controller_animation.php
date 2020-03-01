<?php

class Controller_animation extends Controller {

    function action_default() {
        $this->view->generate('animation.html', null);
    }

}