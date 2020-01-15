<!doctype html>
<html lang="en" style="height:100%">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Sandbox CSS -->
    <link rel="stylesheet" href="css/styles.css" type="text/css">

    <title>Authentication</title>
</head>

<body class="overflow-hidden" style="height:100%; display:none;">

<div id="i-bk-img-n" class="background-body"></div>

<div class="container p-0" style="height:100%">

    <!-- контент на странице -->
    <div class="row justify-content-center align-items-center sb-content-page-container" style="height:100%">
        <div id="i-form-container" class="sb-auth-form-container">
            <form class="sb-auth-form">
                <div class="sb-element-group sb-element-group-t">
                    <input type="text" class="form-control sb-form-input-field" id="i-sb-auth-form-input-name" aria-describedby="user-help" placeholder="Пользователь" name="name">
                    <input type="password" class="form-control sb-form-input-field" id="i-sb-auth-form-input-password" placeholder="Пароль">
                </div>
                <div class="row sb-element-group sb-element-group-b justify-content-center">
                    <button type="submit" class="btn btn-sm mx-3 sb-form-input-button" id="i-sb-auth-submit-button">Войти</button>
                    <button type="reset" class="btn btn-sm mx-3 sb-form-input-button">Сброс</button>
                </div>
            </form>
        </div>
    </div>

</div>

<!-- Bootstrap and jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


<script language="javascript">
    window.onload = function(e) {
        document.body.style.display = "block";
    };
</script>

<!-- действия по нажатиям на кнопочки, ссылки и т.д. -->
<script src="js/toggles.js" language="javascript" type="text/javascript"></script>
</body>
</html>