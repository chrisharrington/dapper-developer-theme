<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="title" content="<?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_title() ) ) ) . ' - The Dapper Developer'; } else { echo 'The Dapper Developer'; } ?>" />
		<meta name="description" content="<?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); } ?>" />

		<?php if (is_single()): ?>
		<meta name="og:title" content="<?php echo the_title(); ?>" />
		<meta name="og:type" content="article" />
		<meta name="og:url" content="<?php echo the_permalink(); ?>" />
		<meta name="og:description" content="<?php echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); ?>" />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:url" content="<?php echo the_permalink(); ?>" />
		<meta name="twitter:title" content="<?php echo the_title(); ?>" />
		<meta name="twitter:description" content="<?php echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); ?>" />
		<?php endif; ?>
		
		<title><?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_title() ) ) ) . ' - The Dapper Developer'; } else { echo 'The Dapper Developer'; }?></title>
		
		<link rel=”author” href="https://plus.google.com/+ChrisHarrington" />
        <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,700|Open+Sans:400,700|Inconsolata:400,700">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />

		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico?v=5" />
        <script>
            var wordpress = {
                postType: "<?php echo get_post_type() ?>",
                tags: JSON.parse('<? echo json_encode(get_tags()) ?>'),
				recentPosts: <?php
					$recentPosts = array();
					foreach (wp_get_recent_posts(array("numberposts" => 10)) as $post) {
						array_push($recentPosts, array(
							id => $post["ID"],
							permalink => get_permalink($post["ID"]),
							title => $post["post_title"],
							authour => $post["post_author"],
							date => $post["post_date_gmt"]
						));
					}
					echo json_encode($recentPosts);
				?>
            };
        </script>
        <script src="<?php bloginfo('template_url'); ?>/script/app.js"></script>
        <script src="//platform.twitter.com/widgets.js"></script>
        <script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-58574025-1', 'auto');
			ga('require', 'displayfeatures');
			ga('send', 'pageview');
        </script>
    </head>
    <body>
        <div class="container-fluid header no-horizontal-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <a href="<?php echo get_home_url(); ?>" class="logo">
                            <h1><?php echo get_bloginfo('name'); ?></h1>
                            <h5><?php echo get_bloginfo('description'); ?></h5>
                        </a>
                    </div>
                    <div class="col-md-4 visible-sm visible-md visible-lg">
                        <div class="pull-right">
                            <div class="row">
                                <div class="col-md-12 text-right">
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
                <div class="col-md-<?php echo (get_post_type() == 'page' ? '12' : '9'); ?>">
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

                                <a href="<?php the_permalink(); ?>"><h1><?php the_title(); ?></h1></a>
                                <?php the_content("Continue reading <i class='fa fa-long-arrow-right'></i>"); ?>
                            </div>

                        <?php }
                    }
                    ?>

					<?php if (is_single()): ?>
						<?php dapper_disqus_embed("dapperdeveloper"); ?>
						<script src="//dapperdeveloper.disqus.com/embed.js"></script>
					<?php endif; ?>
                </div>

                <div class="<?php echo get_post_type() == 'page' ? 'hidden' : 'col-md-3'; ?>">
                    <div class="hidden tags padding-15 lower-case box-sizing pull-left full-width small-font">
                        <h3 class="spacing-bottom-10 upper-case">Tags</h3>
                        <?php
                            $html = "";
                            foreach (get_tags('orderby=count&order=DESC') as $tag) {
                                $html .= '<a href="?tag=' . $tag->slug .'" class="hover row block padding-top-5 padding-bottom-5"><div class="col-md-12"><span class="pull-left bold">' . $tag->name . '</span><span class="pull-right light">' . $tag->count . '</span></div></a>';
                            }
                            echo $html;
                        ?>
                    </div>
					<div id="recent-posts"></div>
                    <div id="tags" class="lower-case"></div>
                    <div id="github"></div>
                    <div id="twitter"></div>
                </div>
            </div>

            <div class="row spacing-top-15">
                <div class="col-md-12">

                </div>
            </div>
        </div>
    </body>
</html>
