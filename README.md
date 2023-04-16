RLSmooth
========

A jQuery flowing effect plugin.

<h2>About</h2>

<p>rlSmooth is a small flowing plugin.</p>

<h2>Usage</h2>

<h3>HTML</h3>

		<div class=".my-class"></div>

<h3>JS</h3>

<p>How to implement:</p>

		<script>
			$(function() {

				$(".my-class or #my-id").rlSmooth();

				// or with options
				$(".my-class or #my-id").rlSmooth('slide',{
					in: 0, 		// pixel default settings for vertical window position to show
					out: 0,     // pixel default settings for vertical window position to hide
					on: 500, 	// ms default settings effect speed
					off: 500 	// ms default settings effect speed
				});

				// Parameter options effects

				// Options     				First effect 			Second effect

				// 'slide'     				slideDown()  			slideUp()
				// 'slideout'  				slideDown()  			fadeOut()
				// 'slidehide' 				slideDown()  			hide()

				// 'fade'      				fadeIn()     			fadeOut()
				// 'fadeup'    				fadeIn()     			slideUp()
				// 'fadehide'  				fadeIn()     			hide()

				// 'showhide'  				show()       			hide()
				// 'showup'    				show()       			slideUp()
				// 'showout'   				show()       			fadeOut()

			});

		</script>

<h2>Demo:</h2>

<p>The default css position is top, but you can change to bottom or apply when you need with css.</p>

<p>rlsmooth.html</p>

<h2>License</h2>
<p>Copyright (c) 2013 Rodrigo Ludgero Licensed under the MIT license</p>

<pre>
<code>

The MIT License

Copyright (c) 2013 Rodrigo Ludgero, http://rodrigoludgero.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

</code>
</pre>

## DISCLAMER

NO WARRANTY OF ANY KIND! USE THIS SOFTWARES AND INFORMATIONS AT YOUR OWN RISK!
[READ DISCLAMER.TXT!](https://www.joeszalai.org/disclaimer/)
License: GNU General Public License v3

[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/for-you.svg)](http://forthebadge.com)

SUPPORT/UPDATES/CONTRIBUTIONS
-----------------------------

If you use my program(s), I would **greatly appreciate it if you kindly give me some suggestions/feedback**. If you solve some issue or fix some bugs or add a new feature, please share with me or mke a pull request. (But I don't have to agree with you or necessarily follow your advice.)<br/>
**Before open an issue** please read the readme (if any :) ), use google and your brain to try to solve the issue by yourself. After all, Github is for developers.<br/>
My **updates will be irregular**, because if the current stage of the program fulfills all of my needs or I do not encounter any bugs, then I have nothing to do.<br/>
**I provide no support.** I wrote these programs for myself. For fun. For free. In my free time. It does not have to work for everyone. However, that does not mean that I do not want to help.<br/>
I've always tested my codes very hard, but it's impossible to test all possible scenarios. Most of the problem could be solved by a simple google search in a matter of minutes. I do the same thing if I download and use a plugin and I run into some errors/bugs.
