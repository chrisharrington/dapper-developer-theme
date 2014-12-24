<!DOCTYPE html>

<?php
    $template_directory = get_bloginfo('template_directory');
?>

<html>
    <head>
        <link type="text/css" rel="stylesheet" href="<?php echo($template_directory . '/style/grid.css'); ?>" />
        <link type="text/css" rel="stylesheet" href="<?php echo($template_directory . '/style/application.css'); ?>" />
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1><?php echo get_bloginfo('name'); ?></h1>
                    <h5><?php echo get_bloginfo('description'); ?></h5>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-9">
                    the article
                </div>
                
                <div class="col-sm-3">
                    the aside
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    the footer
                </div>
            </div>
        </div>
    </body>
</html>