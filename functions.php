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

//[html]
function escape_html( $atts, $content ){
	return esc_html($content);
}
add_shortcode( 'html', 'escape_html' );

//[foobar]
function foobar_func( $atts ){
	return "foo and bar";
}
add_shortcode( 'foobar', 'foobar_func' );

add_theme_support('post-thumbnails');

?>