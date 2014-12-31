<!DOCTYPE html>

<html>
    <head>
        <link href="http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Open+Sans:400,700" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
        
        <script src="<?php bloginfo('template_url'); ?>/script/app.js"></script>
    </head>
    <body>
        <div class="container-fluid header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <a href="index.php" class="logo">
                            <h1><?php echo get_bloginfo('name'); ?></h1>
                            <h5><?php echo get_bloginfo('description'); ?></h5>
                        </a>
                    </div>
                    <div class="col-sm-4 visible-sm visible-md visible-lg">
                        <div class="pull-right">
                            <div class="row">
                                <div class="col-sm-12 text-right">
                                    <a href="https://github.com/chrisharrington" target="_blank">
                                        <i class="fa fa-github-square"></i>
                                    </a>
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
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="pages pull-right">
                                        <?php
                                        $html = "";
                                        foreach (get_pages() as $page) {
                                            $html .= "<li><a href='" . get_page_link($page->ID) . "'>" . $page->post_title . "</a></li>";
                                        }
                                        echo $html;
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container posts">
            <div class="row">
                <div class="col-sm-<?php echo (get_post_type() == 'page' ? '12' : '9'); ?>">
                    <?php
                    if (have_posts()) {
                        while (have_posts()) {
                            the_post(); ?>

                            <div class="post">
                                <?php if (get_post_type() == "post"): ?>
                                <div class="row info">
                                    <div class="col-md-6">
                                        Posted on <?php the_date(); ?> by <?php the_author(); ?>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="pull-right-md spacing-top-0-md spacing-top-5">
                                            <div class="comments pull-left hidden">
                                                <i class="fa fa-comment"></i>
                                                <span><?php echo get_comments_number(); ?></span>
                                            </div>
                                            <?php
                                            $tags = get_the_tags();
                                            if ($tags) {
                                                $html = "<div class='tags pull-left'><i class='fa fa-tags'></i>";
                                                foreach ($tags as $tag) {
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
                                <?php endif; ?>
                                
                                <a href="index.php?p=<?php the_ID(); ?>"><h1><?php the_title(); ?></h1></a>
                                <?php the_content("Continue reading <i class='fa fa-long-arrow-right'></i>"); ?>
                            </div>
                    
                        <?php }
                    }
                    ?>
                </div>
                
                <div class="<?php echo get_post_type() == 'page' ? 'hidden' : 'col-sm-3'; ?>">
                    <div class="tags padding-15 small-font lower-case box-sizing pull-left full-width">
                        <h3 class="spacing-bottom-10 upper-case">Tags</h3>
                        <?php
                            $html = "";
                            foreach (get_tags('orderby=count&order=DESC') as $tag) {
                                $html .= '<a href="?tag=' . $tag->slug .'" class="hover wide-padding-5 pull-left full-width"><span class="pull-left">' . $tag->name . '</span><span class="pull-right light">' . $tag->count . '</span></a><br />';
                            }
                            echo $html;
                        ?>
                    </div>
                    <div id="github"></div>
                    <div id="twitter"></div>
                </div>
            </div>
            
            <div class="row spacing-top-15">
                <div class="col-sm-12">
                    
                </div>
            </div>
        </div>
    </body>
</html>