<?php

class Controller_main extends Controller {

    function __construct() {
        $this->model = new Model_main();
        $this->view = new View();
    }

    function action_index() {
        $parameter = array(
            'page' => $_SESSION['page'],
            'tpp' => $GLOBALS['tasks_per_page'],
            'order' => $_SESSION['order'],
            'bw' => $_SESSION['bw']
        );
        $data = $this->model->get_data($parameter);
        $this->view->generate('view_main.php', 'template.php', $data);
    }

    function action_setorder() {
        $_SESSION['order']  = $_POST['order'];
        $_SESSION['bw']     = $_POST['bw'];
        echo 'window.location.href = "main?page='.$_SESSION['page'].'";'; // редирект
    }
}