<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="title" content="<?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_title() ) ) ) . ' - The Dapper Developer'; } else { echo 'The Dapper Developer'; } ?>" />
		<meta name="description" content="<?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); } ?>" />
		<meta name="keywords" content="<?php if ( is_single() ) { spaced_tags(); } else { echo 'code javascript node'; } ?>" />

		<?php if (is_single()): ?>
		<meta itemprop="name" content="<?php echo the_title(); ?>" />
		<meta itemprop="description" content="<?php echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); ?>" />
		<meta itemprop="author" content="Chris Harrington" />
		<meta itemprop="datePublished" content="<?php echo the_time( get_option( 'date_format' ) ); ?>" />
		
		<meta name="og:title" content="<?php echo the_title(); ?>" />
		<meta name="og:type" content="article" />
		<meta name="og:url" content="<?php echo the_permalink(); ?>" />
		<meta name="og:description" content="<?php echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); ?>" />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:url" content="<?php echo the_permalink(); ?>" />
		<meta name="twitter:title" content="<?php echo the_title(); ?>" />
		<meta name="twitter:description" content="<?php echo htmlspecialchars( strip_tags( html_entity_decode( get_the_excerpt() ) ) ); ?>" />
		
		<?php if (has_post_thumbnail()): ?>
		<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ) )[0]; ?>
		<meta name="twitter:image" content="<?php echo $image; ?>" />
		<meta name="og:image" content="<?php echo $image; ?>" />
		<meta itemprop="image" content="<?php echo $image; ?>" />
		<?php endif; ?>
		<?php endif; ?>
		
		<title><?php if ( is_single() ) { echo htmlspecialchars( strip_tags( html_entity_decode( get_the_title() ) ) ) . ' - The Dapper Developer'; } else { echo 'The Dapper Developer'; }?></title>
		
		<script>
            var wordpress = {
				directory: "<?php bloginfo('template_url'); ?>",
				permalink: "<?php echo the_permalink(); ?>",
				title: "<?php echo the_title(); ?>",
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
		
		<?php if (getenv("ENVIRONMENT") != "development"): ?>
        <script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-58574025-1', 'auto');
			ga('require', 'displayfeatures');
			ga('send', 'pageview');
        </script>
		<?php endif; ?>
		
        <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:400,700|Open+Sans:400,700|Inconsolata:400,700" />
		<link type="text/css" rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css" />
        
		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico?v=6" />
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
                                    <ul class="pages pull-right spacing-0 spacing-top-10">
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
                <div class="col-xs-12 spacing-bottom-15">
                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <!-- top -->
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-3512119169366978"
                         data-ad-slot="8832543044"
                         data-ad-format="auto"></ins>
                    <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
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
								<?php if (is_single()): ?>
								<div class="row spacing-top-2 spacing-bottom-20">
									<div class="col-xs-12" id="share-top"></div>
								</div>
								<?php endif; ?>
                                <?php endif; ?>

                                <a href="<?php the_permalink(); ?>"><h1><?php the_title(); ?></h1></a>
                                <?php the_content("Continue reading <i class='fa fa-long-arrow-right'></i>"); ?>
								
								<div class="row spacing-top-10">
									<div class="col-xs-12" id="share-bottom"></div>
								</div>
                            </div>

                        <?php }
                    }
                    ?>
					
					<?php if (is_single()): ?>
						<?php dapper_disqus_embed("dapperdeveloper"); ?>
						<script src="http://a.disquscdn.com/embed.js"></script>
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
					<div id="recent-posts" class="pull-left"></div>
					<div class="pull-left spacing-top-15 full-width">
                        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
						<!-- sidebar-1 -->
						<ins class="adsbygoogle"
							 style="display:block"
							 data-ad-client="ca-pub-3512119169366978"
							 data-ad-slot="5871756640"
							 data-ad-format="auto"></ins>
						<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
                    </div>
                    <div id="tags" class="pull-left full-width lower-case spacing-top-15"></div>
                    <div id="github" class="pull-left full-width"></div>
                    <div id="twitter" class="pull-left full-width"></div>
					<div class="pull-left spacing-top-15 full-width">
						<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
						<!-- sidebar-2 -->
						<ins class="adsbygoogle"
							 style="display:block"
							 data-ad-client="ca-pub-3512119169366978"
							 data-ad-slot="7348489848"
							 data-ad-format="auto"></ins>
						<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
					</div>
                </div>
            </div>
        </div>
		
		<script src="<?php bloginfo('template_url'); ?>/script.js"></script>
        <script src="https://platform.twitter.com/widgets.js"></script>
    </body>
</html>
