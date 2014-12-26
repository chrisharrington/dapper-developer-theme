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
        
        <div class="container posts">
            <div class="row">
                <div class="col-sm-9">
                    <?php
                    if (have_posts()) {
                        while (have_posts()) {
                            the_post(); ?>

                            <div class="post">
                                <div class="row info">
                                    <div class="col-sm-6">
                                        Posted on <?php the_date(); ?> by <?php the_author(); ?>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="pull-right">
                                            <div class="comments pull-left">
                                                <i class="fa fa-comment"></i>
                                                <span><?php echo get_comments_number(); ?></span>
                                            </div>
                                            <?php
                                            $tags = get_the_tags();
                                            if ($tags) {
                                                $html = "<div class='tags pull-left'><i class='fa fa-tags'></i>";
                                                foreach (get_the_tags() as $tag) {
                                                    $tag_link = get_tag_link($tag->term_id);
                                                    $html .= "<a href='{$tag_link}'>";
                                                    $html .= "{$tag->name}</a>, ";
                                                }
                                                $html = substr($html, 0, strlen($html)-2);
                                                $html .= '</div>';
                                                echo $html;
                                            }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                                <h2><?php the_title(); ?></h2>
                                <?php the_content("Continue reading <i class='fa fa-long-arrow-right'></i>"); ?>
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