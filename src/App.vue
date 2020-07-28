<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>

//import Home from "./page/Home.vue"


export default {
  name: 'App',
//   components: {
//     Home
//   }
}
</script>

<style >

/* @font-face {
 font-family: "Open Sans";
 src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
        url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
} */

* { 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box; 
}

/* .page-bg {
    background-image: url(../upload/bg-pizza.jpg);
} */

.logoImageRetina {
    width: 190px;
}

html, body, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video
{
	border: 0;
	font: 100%;
	margin: 0;
	padding: 0;
	vertical-align: baseline;
	letter-spacing: 0;
	color: #333;
	font-size: 13px;
	font-weight: 400;
	line-height: 2;
	font-family: 'Merriweather', serif;
	letter-spacing: 0.5px;
}

html, body {
	margin:0;
  padding:0;
  height:100%;
  -webkit-font-smoothing: antialiased; 
}

body {
	background: #f5f5f5;
}

.entry-content img { margin: 0 0 20px 0; }
.alignleft, img.alignleft { float: left; margin: 10px 20px 10px 0; }
.alignright, img.alignright { display: block; float: right; margin: 10px 0 10px 20px; }
.aligncenter, img.aligncenter { clear: both; display: block; margin: 10px auto 10px auto; }
.wp-caption { background: #fff; max-width: 96%; /* Image does not overflow the content area */ padding: 5px 3px 10px; text-align: center; }
.wp-caption img { border: 0 none; margin: 0; padding: 0; }
.wp-caption p.wp-caption-text { margin: 0; padding: 5px; font-family: Georgia, "Times New Roman", Times, serif; color: #1b1b1b; 	line-height: 1.9; font-size: 12px; }
.wp-smiley { max-height: 12px; margin: 0 !important; }
.gallery img, .gallery dl { margin: 0; }
.gallery-caption { margin: -20px 0 0 0; }
.textaligncenter { text-align: center; }
.clear { clear: both; }
.fl { float: left; }
.fr { float: right; }

p {
	margin-bottom: 20px;
}

strong {
	font-weight: 700;
	color: #000;
}

a {
	outline: none;
	text-decoration: none;
	-webkit-transition-duration: 1s;
	-moz-transition-duration: 1s;
	-o-transition-duration: 1s;	
	color: #000;
}

a:hover {
	color: #fab940;
}

.display-none { 
	display: none;
}
.display-block {
	display: block;
}

img {
	border: 0 none;
    height: auto;
    max-width: 100%;
}

.table_view {
	display: table;
	vertical-align: middle;
	width: 100%;
	height: 100%;
}

.table_cell {
	display: table-cell;
	vertical-align: middle;
}


body {
	word-break: break-word;
}

.global-wrapper {
	min-height:100%;
	position: relative;
	overflow: hidden;
}


.wrapper-special {
	position: relative;
}
.container-wrapper {
    position: relative;
    padding: 0;
    background: #fff;
    margin-left: 0px;
}

@media screen and (min-width: 996px){
	.container-wrapper {
		margin-left: 250px;
	}

}

#container {
    width: 750px;
    float: left;
    margin-top: 100px;
    z-index: 2;
    position: relative;
}

.page-bg {
    top: 0;
    left: 250px;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    z-index: 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.page-wrapper {
	background: #fcf6ec;
	padding: 50px;
}

.page-wrapper ul,
.page-wrapper ol {
	margin-bottom: 30px;
}

ul li {
	margin-left: 18px;
}
ul li li {
	margin-left: 36px;
}

ol li {
	margin-left: 25px;
}

ol li li {
	margin-left: 50px;
}


 blockquote {
	margin-bottom: 24px;
	margin-bottom: 1.714285714rem;
	padding: 24px;
	padding: 1.714285714rem;
	font-style: italic;
}
 blockquote p:last-child {
	margin-bottom: 0;
}
 code {
	font-family: Consolas, Monaco, Lucida Console, monospace;
	font-size: 12px;
	font-size: 0.857142857rem;
	line-height: 2;
}
 pre {
	border: 1px solid #ededed;
	color: #666;
	font-family: Consolas, Monaco, Lucida Console, monospace;
	font-size: 12px;
	font-size: 0.857142857rem;
	line-height: 1.714285714;
	margin: 24px 0;
	margin: 1.714285714rem 0;
	overflow: auto;
	padding: 24px;
	padding: 1.714285714rem;
}
 pre code {
	display: block;
}
 abbr
 dfn
 acronym {
	border-bottom: 1px dotted #666;
	cursor: help;
}
 address {
	display: block;
	line-height: 1.714285714;
	margin: 0 0 24px;
	margin: 0 0 1.714285714rem;
}

 dl {
	margin: 0 1.714285714rem;
	margin-bottom: 30px;
}
 dt {
	font-weight: bold;
	line-height: 1.714285714;
	color: #000;
}
 dd {
	line-height: 1.714285714;
	margin-bottom: 24px;
	margin-bottom: 1.714285714rem;
}
 table {
	color: #757575;
	font-size: 12px;
	font-size: 0.857142857rem;
	line-height: 2;
	margin: 0 0 24px;
	margin: 0 0 1.714285714rem;
	width: 100%;
}

  table,
  th,
  td {
	border: 1px solid rgba(0, 0, 0, 0.1);
}
 table caption {
	font-size: 16px;
	font-size: 1.142857143rem;
	margin: 24px 0;
	margin: 1.714285714rem 0;
}
 td {
	padding: 6px 10px 6px 6px;
}
table th {
	color: #000;
	font-weight: 700;
}

 dl.gallery-item {
	margin: 0;
}
.gallery-item a,
.gallery-caption {
	width: 90%;
}
.gallery-item a {
	display: block;
}
.gallery-caption a {
	display: inline;
}
.gallery-columns-1 .gallery-item a {
	max-width: 100%;
	width: auto;
}
.gallery .gallery-icon img {
	height: auto;
	max-width: 90%;
	padding: 5%;
}
.gallery-columns-1 .gallery-icon img {
	padding: 3%;
}

.gallery-caption {
	margin-top: 15px;
}

.pagination-wrapper .alignleft {
	margin-left: 10px; 
	margin-bottom: 20px;
}

.pagination-wrapper .alignright {
	margin-right: 10px;  
	margin-bottom: 20px;
}

.pagination-wrapper .alignleft a, .pagination-wrapper .alignright a {
	text-decoration: none;
	color: #000;
	text-transform: uppercase;
	font-weight: 700;
}
.pagination-wrapper .alignleft a:hover, .pagination-wrapper .alignright a:hover {
	text-decoration: underline;
	color: #888;
}

.post-password-form input[name="post_password"] { 
	background: #fff;
	color: #888;
	padding: 10px;
	font-size: 13px;
	font-weight: 400;
	border: 1px solid #eee;
	outline: none;
}

.post-password-form input[name="Submit"] { 
	background: #000;
	color: #fff;
	padding: 10px 30px;
	font-size: 13px;
	font-weight: 600;
	border: none;
	text-transform: uppercase;
	letter-spacing: 3px;
	border: 1px solid #000;
}
.post-password-form input[name="Submit"]:hover { 
	cursor: pointer;
}

.ares .tp-bullet {
	width: 10px;
	height: 10px;
	position: absolute;
	background: none;
	border-radius: 50%;
	cursor: pointer;
	box-sizing: content-box;
	background: #fff;
}

.ares .tp-bullet:hover, .ares .tp-bullet.selected {
	width: 20px;
	height: 20px;
	margin-left: -5px;
	margin-top: -5px;
	background: #fff;
}


.wpb_content_element,
ul.wpb_thumbnails-fluid > li,
.wpb_button {
    margin-bottom: 100px !important;
}

.vc_row-has-fill > .vc_column_container > .vc_column-inner,
.vc_row-has-fill + .vc_row > .vc_column_container > .vc_column-inner,
.vc_row-has-fill + .vc_row-full-width + .vc_row > .vc_column_container > .vc_column-inner,
.vc_col-has-fill > .vc_column-inner {
    padding-top: 100px !important;
}


.vc_row-has-fill > .vc_row > .vc_vc_column > .vc_column_container > .vc_column-inner,
.vc_row-has-fill > .vc_vc_column_inner > .vc_column_container > .vc_column-inner,
.vc_row-has-fill + .vc_vc_row > .vc_row > .vc_vc_column > .vc_column_container > .vc_column-inner,
.vc_row-has-fill + .vc_vc_row_inner > .vc_row > .vc_vc_column_inner > .vc_column_container > .vc_column-inner {
    padding-top: 100px !important;
}

/*------------------------------------------------------------------
[end of 1. Basic WP styles]
------------------------------------------------------------------*/


/*------------------------------------------------------------------
[2. Titles ]
------------------------------------------------------------------*/

h1, h2, h3, h4, h5, h6 {
	color: #000;
	line-height: 1;
	text-transform: uppercase;
	font-family: 'Patua One', cursive;
}

h1 {
	font-size: 32px;
	letter-spacing: 0;
	margin-bottom: 25px;
}
h2 {
	font-size: 28px;
	letter-spacing: 0px;
	margin-bottom: 30px;
}
h3 {
	font-size: 24px;
	letter-spacing: 0px;
	margin-bottom: 30px;
}
h4 {
	font-size: 20px;
	letter-spacing: 0px;
	margin-bottom: 20px;
}
h5 {
	font-size: 18px;
	margin-bottom: 20px;
}
h6 {
	font-size: 16px;
	margin-bottom: 20px;
}


.page-title-inner {
    line-height: 1;
    background: #242424;
    display: inline-block;
	margin-left: 50px;
	border-left: 6px solid #fab940;
	padding: 12px 50px 12px 10px;
}

h1.page-title {
    float: right;
	margin-bottom: 0;
	line-height: 1;
	color: #fcf6ec;
	font-family: 'Patua One', cursive;
	font-size: 32px;
	margin-top: 3px
}

span.page-title-icon {
    display: inline;
    color: #fab940;
	margin-right: 15px
}

span.page-title-icon:before {
    display: inline;
    color: #fab940;
    font-size: 38px;
}

.page-title-icon-image > img, .offer-menu2-icon-image > img {
    max-width: 40px;
    max-height: 40px;
}
</style>

