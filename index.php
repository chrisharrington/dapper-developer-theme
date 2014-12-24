<!DOCTYPE html>

<html>
    <head>
        <link href="http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Open+Sans:400,700" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
    </head>
    <body>
        <div class="container-fluid header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-push-8">
                        <div>
                            <i class="fa fa-twitter"></i>
                        </div>    
                    </div>
                    <div class="col-sm-8 col-sm-pull-4">
                        <h1><?php echo get_bloginfo('name'); ?></h1>
                        <h5><?php echo get_bloginfo('description'); ?></h5>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
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