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
                    <div class="col-sm-8">
                        <h1><?php echo get_bloginfo('name'); ?></h1>
                        <h5><?php echo get_bloginfo('description'); ?></h5>
                    </div>
                    <div class="col-sm-4 visible-sm visible-md visible-lg">
                        <div class="pull-right">
                            <a href="https://twitter.com/charrington99" target="_blank">
                                <i class="fa fa-twitter-square"></i>
                            </a>
                            <a href="https://plus.google.com/+ChrisHarrington" target="_blank">
                                <i class="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://ca.linkedin.com/in/chrisharrington99" target="_blank">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <?php
                    if (have_posts()) {
                        while (have_posts()) {
                            the_post(); ?>

                            <div class="post">
                                <div class="row">
                                    <div class="col-sm-6">
                                        By <?php the_author(); ?> on <?php the_date(); ?>
                                    </div>
                                    <div class="col-sm-6">
                                        <?php the_tags('<i class="fa fa-tags"></i>'); ?>
                                    </div>
                                </div>
                                
                                <div class="info">
                                    
                                    <span class="tags">
                                        
                                    </span>
                                </div>
                                <h2><?php the_title(); ?></h2>
                                <?php the_excerpt(); ?>
                            </div>
                    
                        <?php }
                    }
                    ?>
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