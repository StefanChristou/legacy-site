<?php get_header(); ?>
<section id="content" role="main">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="success">
			<h1 class="entry-title"><?php the_title(); ?></h1> <?php edit_post_link(); ?>
		</header>
		<section class="entry-content">
			<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
			<?php the_content(); ?>
			<div class="testi">
				<span class="monial">
					<div class="monialPicCont">
						<img src="http://www.stefanchristou.com/positive-internet/wp-content/uploads/2016/07/chic.jpg">
					</div>
					<p>‘The past few years have seen a dramatic change in the public perception of web hosting for wordpress.’</p>
				</span>
				<span class="monial">
					<div class="monialPicCont">
						<img src="http://www.stefanchristou.com/positive-internet/wp-content/uploads/2016/07/dude1.jpg">
					</div>
					<p>‘The past few years have seen a dramatic change in the public perception of web hosting for wordpress.’</p>
				</span>
				<span class="monial">
					<div class="monialPicCont">
						<img src="http://www.stefanchristou.com/positive-internet/wp-content/uploads/2016/07/dude2.jpg">
					</div>
					<p>‘The past few years have seen a dramatic change in the public perception of web hosting for wordpress.’</p>
				</span>
			</div>
		</section>
	</article>
	<?php if ( ! post_password_required() ) comments_template( '', true ); ?>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>