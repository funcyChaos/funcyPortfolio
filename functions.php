<?php

function theme_setup(){

	wp_enqueue_style('style.css', get_stylesheet_uri());

	wp_enqueue_script('main_script', get_theme_file_uri('/js/index.js'), array(), false, true);
}

add_action('wp_enqueue_scripts', 'theme_setup');