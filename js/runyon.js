// var freshbox_parent_element = ".img_container";
//
// /**
//  * Runyon
//  * Formats projects horizontally
//  */
// var Design = {
//
// 	/**
// 	 * Data
// 	 * Stores globally accessed variables
// 	 */
// 	Data : {
// 		"fluid_elements"			: null,	// What containers are fluid
// 		"img_container_elements"	: null,	// What elements are fluid
//
// 		"content_space"				: 0,	// The height of the content
// 		"current_page"				: 0,	// Current thumbnail page
// 		"init_size"					: true,	// Checks to see if the user resized the window
// 		"min_height"				: 560,	// The minimum height of the content
// 		"tallest_img"				: 0,	// Height of the tallest img in the project
// 		"scroll_left"				: 0,	// Position scrolled left when paginating
// 		"window_height"				: 0,	// Window height
// 		"window_width"				: 0,	// Window width
// 		"content_buffer"			: 200,	// Extra space between the thumbnails and the window edge
// 		"content_padding"			: 40	// Extra space at the bottom of the project images before window edge
// 	},
//
// 	/**
// 	 * Init
// 	 *	Used for format the site across all pages
// 	 */
// 	Init : function() {
//
// 		// Setup the variables
// 		Design.Data.flid_elements 			= "#content_container, #maincontainer";
// 		Design.Data.img_container_elements	= ".entry img, .entry .video, .entry .video_component, .entry .slideshow_component";
//
// 		// Default Cargo triggers
// 		$(document).trigger("pageReady");
// 		$(document).trigger("initNextProject");
// 		changeHorizNav(1);
//
// 		// Remove the extra break in the nav
// 		$(".nav_container br").remove();
//
// 		// Make the entire thumbnail clickable
// 		$(".project_thumb").click(function(e){
// 			var linkTarget = e.target;
// 				linkTarget = linkTarget+" ";
// 			if( linkTarget.indexOf('http') < 0 )  $("a[rel=history]", this).click();
// 		});
//
// 		// Give the pages a class
// 		$("[id^=page_]").wrapAll('<div class="thumbnail_wrapper" />');
//
// 		// Fix the pagination
// 		$(".pagination").appendTo($(".thumbnail_wrapper"));
//
// 		// Clear the thumbs
// 		$("#content_container").append('<div class="thumbnail_clear" style="clear: both;" />');
//
// 		// Pagination click check
// 		$(".pagination").bind("mousedown", function() {
// 			$(".pagination").data("click", "true");
// 		});
//
// 		// Setup the events
// 		Design.PaginateComplete();
//
// 		Design.Resize();
// 		$(window).resize(function() {
// 			Design.Data.init_size = false;
// 			Design.Resize();
// 		});
//
// 		Design.Scroll();
// 		$(window).scroll(function() { Design.Scroll() });
//
// 	}, // end Init
//
// 	/**
// 	 * Resize
// 	 */
// 	Resize : function() {
// 		Design.Data.window_height = $(window).height(),
// 		Design.Data.window_width  = $(window).width();
//
// 		// Window height hacks
// 		if( testIE() ) Design.Data.window_height = $(window).height() - 3;
//
// 		if( Cargo.Config.GetCurrentPageType() != "none" ) {
// 			Design.Project.FormatIMGs();
// 		}
// 	},
//
// 	/**
// 	 * Scroll
// 	 */
// 	Scroll : function() {
// 		Design.Data.scroll_left = $(window).scrollLeft();
// 	},
//
// 	/**
// 	 * Pagination
// 	 * 	Formats the thumbnails
// 	 */
// 	PaginateComplete : function() {
// 		Design.Data.current_page = "#page_" + $("#current_page").val();
// 		Design.Project.FormatThumbnails();
// 		Design.Resize();
//
// 		// Scroll to the thumbnails
// 		if( $(".pagination").data("click") == "true" ) $(window).scrollLeft(Design.Data.scroll_left);
//
// 		// Reset the click check
// 		$(".pagination").data("click", "false");
// 	},
//
// 	SoloLink : function() {
// 		// Format on SoloLinks
// 		if( Cargo.Location.IsSoloLink() ) {
//       Design.Project.Init();
//     }
// 	}
//
// }; // end Design
//
// $(document)
// 	.ready(function() {
// 		Design.Init();
// 		Design.SoloLink();
// 	})
// 	.bind("pageChangeComplete", function() {
// 		Design.PaginateComplete()
// 	});
//
//
// /**
//  * Project
//  */
// Design.Project = {
//
// 	/**
// 	 * Initial formatting
// 	 */
// 	Init : function() {
//
// 		// Update the resize check
// 		Design.Data.init_size = true;
//
// 		// Add the related class to content container
// 		$("#content_container").addClass("content_active");
//
// 		// Find the videos
// 		Design.Project.iFrameSource();
//
// 		// Create image container element
// 		$(".entry")
// 			.append('<div class="text_container" />')
// 			.append('<div class="img_container" />');
//
// 		// Set the original size
// 		$(Design.Data.img_container_elements).each(function() {
// 			Design.Project.OriginalSize($(this));
// 		});
//
// 		// Backup for FF
// 		$(Design.Data.img_container_elements).imagesLoaded(function( $images, $proper, $broken ){
// 			$images.each( function() {
// 				Design.Project.OriginalSize($(this));
// 		    });
// 		});
//
// 		// Define the original element sizes
// 		$(Design.Data.img_container_elements).each(function() {
//
// 			// If the image isn't in a slideshow, move it
// 			if( !$(this).parents(".slideshow_wrapper").length > 0 ) {
// 				$(this).appendTo(".img_container");
// 			}
//
// 			// if IE get rid of the next break
// 			if( testIE() ) $("br[style]").remove();
//
// 		});
//
// 		// Clean up and position the text
// 		$(".text_container")
// 			.append($(".project_title"))
// 			.append($(".project_content"))
// 			.append($(".project_footer"));
//
// 		$(".project_next").append("<span class='arrow'>â†’</span>");
//
// 		$(window).scrollLeft(0);
// 		setTimeout('$(window).scrollLeft(0)', 10);
//
// 		// Format the images
// 		Design.Resize();
// 		Design.Data.doc_height = $(document).height();
//
// 		// Re-call the freshbox
// 		// Lightbox
// 		$(".entry").FreshBox();
//
// 	},
//
// 	OriginalSize : function(element) {
// 		$(element).each( function() {
//
// 	        if( !$(this).hasClass("slideshow_component") && $(this).attr("height") != 0 ) {
// 				$(this)
// 					.attr("data-height_o", parseInt($(this)[0].getAttribute("height")))
// 					.attr("data-width_o" , parseInt($(this)[0].getAttribute("width")));
// 			} else {
// 				// $(this).removeAttr("height_o").removeAttr("width_o");
//
// 				// $(this)
// 				// 	.attr("height_o", $(this).height())
// 				// 	.attr("width_o" , $(this).width());
// 			}
//
// 			Design.Resize();
//
// 	    });
// 	},
//
// 	/**
// 	 * Resizes the images to fit within the height of the window
// 	 */
// 	FormatIMGs : function() {
//
// 		// Check the scrollbar height
// 		if( Cargo.Config.GetScrollBarWidth() > 0 && Design.Data.init_size == true) Design.Data.window_height = $(window).height() - Cargo.Config.GetScrollBarWidth();
//
// 		var container_width 	= 0,
// 			min_height 			= Design.Data.min_height,
// 			window_height		= Design.Data.window_height,
// 			container_space 	= (min_height > window_height) ? min_height : window_height,
// 			img_container_width = 0,
// 			content_space 		= container_space
// 								- parseInt($("#content_container").css("paddingTop"))
// 								- parseInt($("#content_container").css("paddingBottom")),
// 			tallest_img 		= min_height;
//
//     // Container space
//     if ( ! $("#maincontainer").lenght === 0 ) {
//       content_space = content_space - parseInt($("#maincontainer").css("paddingTop"))
//         - parseInt($("#maincontainer").css("paddingBottom"));
//     } else {
//       content_space = content_space - Design.Data.content_padding;
//     }
//
// 		// Update the content space
// 		Design.Data.content_space = content_space;
//
// 		// Resize each element
// 		$(Design.Data.img_container_elements).each(function() {
//
// 			var height_o = parseInt($(this).attr("data-height_o")),
// 				width_o  = parseInt($(this).attr("data-width_o")),
// 				ratio	 = width_o / height_o;
//
// 		    // If the browser height is too small
// 		    if (height_o > content_space) {
// 		        $(this).css({
// 		            "height" : content_space,
// 		           	"width"  : Math.ceil(ratio * content_space)
// 		        });
//
// 		    // Otherwise, set the image dimensions to be that of their original values
// 		    } else {
// 		    	if( !testIE() ) {
// 		        	$(this).css({
// 		        		"height" : height_o,
// 		        		"width"  : width_o
// 		        	});
// 		        }
//
// 		    } // end height check
//
// 			/**
// 			 * If the image isn't in a slideshow, add it to the
// 			 * total width of the image container
// 			 */
// 			if( !$(this).parent(".slideshow_container").length > 0 && !$(this).hasClass("slideshow_component") ) {
// 				img_container_width += $(this).outerWidth(true);
//
// 			// But if it is a slideshow
// 			} else if ( $(this).hasClass("slideshow_component") ) {
// 				Design.Project.FixSlideshows();
// 				img_container_width += $(this).outerWidth(true);
// 			}
//
// 			// Find the tallest img
// 			if( $(this).height() > tallest_img ) {
// 				tallest_img = $(this).height();
// 			}
//
// 		}); // end image resize loop
//
// 		// Just incase
// 		Design.Project.FixSlideshows();
//
// 		Design.Data.tallest_img = tallest_img;
// 		Design.Project.FormatPageWidth();
//
// 		/**
// 		 * Define the widths of the elements
// 		 */
//
// 		if( testIE() ) img_container_width = img_container_width + 10;
//
// 		$(".img_container").width(img_container_width);
//
// 		/* Set the thumb width based on visibility */
// 		var thumbnail_width = ( this.GetAreThumbsVisisble() ) ? $(".thumbnail_wrapper").outerWidth(true) : 0;
//
// 		var maincontainer_width 	= $(".img_container").outerWidth(true) + $(".text_container").outerWidth(true),
// 			content_container_width = $(".img_container").outerWidth(true) + $(".text_container").outerWidth(true) + $(".thumbnail_wrapper").outerWidth(true) + 50;
//
// 		$("#maincontainer").width(maincontainer_width);
// 		$("#content_container").width(content_container_width);
// 	},
//
// 	/*
// 	 * Formats the thumbnails
// 	 */
// 	FormatThumbnails : function() {
//
// 		// If the page isn't formatted
// 		if( $(Design.Data.current_page).attr("data-formatted") == null) {
//
// 			// On each thumbnail for the current page
// 			$(Design.Data.current_page + " .project_thumb").each(function() {
//
// 				Design.Project.ResizeThumbnails($(this));
//
// 				// If there is a title or a tag
// 				if($(".thumb_title", this).length > 0 || $(".thumb_tag", this).length > 0) {
//
// 					// Create the info container
// 					$(this).append('<div class="thumb_info" />');
//
// 					// And add the title/tags to it
// 					$(".thumb_info", this)
// 						.append($(".thumb_title", this))
// 						.append($(".thumb_tag", this));
//
// 				} // end title/tag check
//
// 			}); // end thumbnail loop
//
// 			// Mark it as formatted
// 			$(Design.Data.current_page).attr("data-formatted", true);
//
// 		} // end Format check
// 	}, // end FormatThumbnails
//
// 	ResizeThumbnails : function(element) {
// 		$(element).width($(".cardimgcrop img", element).width());
// 	},
//
// 	FormatPageWidth : function() {
// 		// Add up the width of all the thumbnails
// 		var thumbnails_width 			= 0,
// 			thumbnail_container_width 	= 0;
//
// 		if( this.GetAreThumbsVisisble() ) {
// 			$(Design.Data.current_page + " .project_thumb").each(function() {
// 				thumbnails_width += $(this).outerWidth(true);
// 			});
//
// 			// Calculate how many rows we can fit inside the content height
// 			var current_page 				= Design.Data.current_page,
// 				tallest_img					= Design.Data.tallest_img,
// 				thumb_height				= parseInt($(".project_thumb:first", current_page).outerHeight(true)),
// 				thumb_pad					= parseInt($(".project_thumb:first", current_page).css("marginBottom")),
// 				thumbnail_rows 				= Math.floor((tallest_img + thumb_pad) / thumb_height),
// 				thumbnail_container_width 	= thumbnails_width / thumbnail_rows + Design.Data.content_buffer;
//
// 		}
//
// 		$(".thumbnail_wrapper").css({
// 			"width" : thumbnail_container_width
// 		});
// 	},
//
// 	/*
// 	 * Check to see if the thumbnails are visible
// 	 */
// 	GetAreThumbsVisisble : function() {
//
// 		var is_visible = false;
// 		$(".thumbnail_wrapper > div").each(function() {
// 		    if( $(this).is(":visible") ) {
// 		        is_visible = true;
// 		    }
// 		});
//
// 		return is_visible;
//
// 	},
//
// 	/**
// 	 * Checks to see who the host of the iframe is
// 	 */
// 	iFrameSource : function() {
// 		$(".entry iframe").each(function() {
// 	Â  Â  Â  Â  var src = $(this).attr("src");
// 	Â  Â  Â  Â Â
// 	Â  Â  Â  Â Â if (src.indexOf("vimeo") >= 0 || src.indexOf("youtube") >= 0) {
// 	Â  Â  Â  Â  Â  Â Â $(this).addClass("video"); Â  Â
// 	Â  Â  Â  Â  } else if (src.indexOf("soundcloud") >= 0) {
// 	Â  Â  Â  Â  Â  Â Â $(this).addClass("soundcloud");
// 	Â  Â  Â  Â  }
// 	Â  Â  Â  Â Â
// 	Â  Â Â });
// 	},
//
// 	/**
// 	 * Resets all of the thumbnail business
// 	 */
// 	Close : function() {
// 		// Remove the related class to content container
// 		$("#content_container").removeClass("content_active");
//
// 		$("#content_container, #maincontainer, .thumbnail_wrapper").css({
// 			"height" : "auto",
// 			"width"  : "auto"
// 		});
//
// 		// Reformat the thumbnails
// 		$(Design.Data.current_page + " .project_thumb").each(function() {
// 			Design.Project.ResizeThumbnails($(this));
// 		});
//
// 		$(window).scrollLeft(0);
// 	},
//
// 	/**
// 	 * Fixes the dimensions of the slideshows to match the image visible
// 	 */
// 	FixSlideshows : function() {
// 		$(".slideshow_component").each(function() {
// 			var id = "#" + $(this).attr("id");
// 			// If this has an ID
// 			if( id != "#" ) {
// 				// If we're in IE8, set it through the attributes
// 				if( Cargo.Config.isIE8() ) {
// 					$(id + ", " + id + " .slideshow_wrapper, " + id + " .slideshow_container")
// 						.attr("height", $("img:visible", this).height())
// 						.attr("width", $("img:visible", this).width());
//
// 				// Otherwise, set it through the CSS
// 				} else {
// 					$(id + ", " + id + " .slideshow_wrapper, " + id + " .slideshow_container").css({
// 						"height" : $("img:visible", this).height(),
// 						"width"  : $("img:visible", this).width()
// 					});
// 				}
// 			} //end if
// 		 }); // end slideshow loop
// 	}
//
// }; // end Project
//
// $(document)
// 	.bind("projectLoadComplete", function() {
// 		if( $(".text_container").length == 0 ) {
// 			Design.Project.Init();
// 		}
//
// 	}).bind("projectCloseComplete", function() {
// 		Design.Project.Close()
//
// 	}).bind("startProjectLoaded", function() {
// 		Design.Project.Init()
//
// 	}).bind("editProjectLoaded", function() {
// 		Design.Project.Init()
// 	});
//
// /**
//  * Slideshow dimension fix
//  */
// $(document).bind("slideshowTransitionFinish", function() { Design.Project.FormatIMGs() });
//
// /******************************************************************************
//  *	Images loaded plugin
//  *****************************************************************************/
//
// (function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
// 0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
// g}})(jQuery);
