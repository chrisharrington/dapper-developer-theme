<?php

function dapper_disqus_embed($disqus_shortname) {
    global $post;
    echo '<div id="disqus_thread"></div>
    <script type="text/javascript">
        var disqus_shortname = "'.$disqus_shortname.'";
        var disqus_title = "'.$post->post_title.'";
        var disqus_url = "'.get_permalink($post->ID).'";
        var disqus_identifier = "'.$disqus_shortname.'-'.$post->ID.'";
    </script>';
}

//[code language="the language"]
function code( $atts, $content) {
	$a = shortcode_atts( array(
        'language' => ''
    ), $atts );
	
	$language = $a["language"];
	if ($language == "html")
		$content = esc_html($content);

	return "<pre><code data-language=" . $language . ">" . str_replace("<p>", '', trim($content)) . "</code></pre>";
}
add_shortcode( "code", "code" );

function chart($atts, $content) {
	return "<div class='chart-container'><script type='application/json'>" . str_replace("<p>", '', trim(removesmartquotes($content))) . "</script></div>";
}
add_shortcode("chart", "chart");

function removesmartquotes($content) {
	$content = str_replace('&#8220;', '"', $content);
	$content = str_replace('&#8221;', '"', $content);
	$content = str_replace('&#8243;', '"', $content);
	return $content;
}

add_theme_support('post-thumbnails');

remove_filter( 'the_content', 'wpautop' );
add_filter( 'the_content', 'wpautop' , 99);
add_filter( 'the_content', 'shortcode_unautop',100 );

?>