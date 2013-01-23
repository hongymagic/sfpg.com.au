# In this website, there is no concept of partial views or pages. Everything is
# a whole `Page` which only covers a section of the webpage: content section. A
# `page` is tightly coupled to the main `Menu` in that, every page is associated
# to a menu item in one-to-one fashion.

class Page
	container: '#content'

	constructor: (@url) ->
		@url = "#{@url}.html"
		@$container = $ @container
		@load()

	load: ->
		@$container.load(@url);

# Essentially, a menu consists of menu items that link to a `Page`. Here we can
# create a list of `Page`s as part of the `Menu` using the HTML markup attribute
# `data-page`.

class Menu
	constructor: (@selector) ->
		$menu = $ "#{@selector}"
		$menu.on 'click', 'a', (event) ->
			event.preventDefault()
			new Page @href



# Let's start the app when page is ready

$ ->
	menu = new Menu '#menu'