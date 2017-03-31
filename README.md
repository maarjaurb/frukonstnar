# Hugo University Template

Das Hugo University Template ist das Start-Template für Invisible University Webseiten. Es geht zurück auf das Premium-Theme "Viality" der [StartBootstrap-Reihe](//https://wrapbootstrap.com). Es ist derzeit nicht kostenlos! Es kostet $10. Wie du diese bezahlen kannst, siehe weiter unten.

## Vorbereitung: Hugo, Less


## Installation

Klone das Template:

    $ git clone --recursive https://github.com/invisible-university/template [dein Projektname, erfinde etwas!]
    $ cd [dein Projektname]

Kreiere das Projekt auf Github:

    $ curl -u '[dein Github-Konto]' https://api.github.com/user/repos -d '{"name":"[dein Projektname]"}'
    $ 

Passe die Variable BaseUrl in der Datei `config.toml` an (Zeile 6):

		$ 6 Baseurl = "https://[dein Github-Konto].github.io/[dein Projektname]/"

Dann ersetze in Zeile 8 gleich noch das Wort "template" mit deinem Namen.

Speichern. Dann `add, commit, push`.

		$ git add .
		$ git commit -m "First commit"
		$ git push -u origin master





## Getting started

After installing the Hugo Vitality Theme successfully it requires a just a few more steps to get your site running.


### Install the StartBootstrap theme

The Hugo Vitality Theme is just a frame for the StartBootstrap Vitality theme. Vitality is a premium theme and is not free. A single licence costs $10. You can buy it here: [StartBootstrap Vitality](//wrapbootstrap.com/theme/vitality-multipurpose-one-page-theme-WB02K3KK3). From the downloaded zip file just extract the <em>contents</em> of the dist folder to the static folder of this project. After copying there has to be a `static/index.html` file.

### The config file

Take a look inside the [`exampleSite`](//github.com/hugo-startbootstrap-themes/hugo-vitality-theme/tree/master/exampleSite) folder of this theme. You'll find six config files called config-agency.toml, config-creative.toml, config-culinary.toml, config-fashion.toml, config-legal.toml, config-video.toml. Select one of them and copy it in the root folder of your Hugo site. Rename it to config.toml. Then test the site:

```
cp themes/hugo-vitality-theme/exampleSite/config-[agency || creative || culinary || fashion || legal || video].toml config.toml
hugo serve
```
Now you can look at the site with a browser at address `http://localhost:1313`.

Feel free to change the strings in this theme. You will also find some hints there where to look next.

### Optional: Modify website for use with github pages

Add to config.yaml at line 10:

	$ publishDir = "docs"

In case you called the hugo command before, delete old public directory. Then call hugo again.
	
	$ rm public
	$ hugo

Push website to Github. First create it on Github and then use following commands: 

	$ git init 
	$ git add .
	$ git commit -m "First commit."
	$ git remote add origin [your repository ]
	$ git push -u

Go back to Github and switch on the pages functionality: set `Settings/Github Pages/Source` to `master branch /docs folder`.


### Change the hero background and text

To change the hero eye-catcher of the site, open the file [`themes/hugo-vitality-theme/data/[your flavour]/hero.yaml`](//github.com/hugo-startbootstrap-themes/hugo-vitality-theme/tree/master/data/agency/hero.yaml) and change image locations and texts there, and then copy your images into the static/img folder. That's where hugo will look for it.


### Select the content sections

In the file [`themes/hugo-vitality-theme/layouts/index.html`](//github.com/hugo-startbootstrap-themes/hugo-vitality-theme/tree/master/layouts/index.html) you find the content structure of your new website. It is organised in partials in the partials folder. In the index.html file you find all the content sections for every flavour, one line each. Feel free to change order, add and remove lines there. The corresponding data you find in the `themes/hugo-vitality-theme/data` folder. There is a .yaml file for every content section. If you need to change the layout itself or add content, you can do it by changing the .html file in `themes/hugo-vitality-theme/layouts/partials/[your flavour]` folder. One content section is different: work.

### The Work section

The work section contains an extra work_ folder in the `themes/hugo-vitality-theme/data/[your flavour]` folder. In there you find one .yaml file per product/project page. Just modify those files, add or delete.

### Icons

All icons are part of Fontawesome's icon font. Look at the website of [Fontawesome](//fortawesome.github.io/Font-Awesome/icons/) for more icons. The icons are represented by their corresponding CSS class of Fontawesome. 

### Less vs. CSS

All custom styles of the theme are found in `static/css/vitality-red.css`. It is recommended not to change styles there, but in the static/less folder. The main less file is vitality.less. To compile it use the command

```
lessc static/less/vitality.less static/css/vitality-red.css
```

before invoking `hugo serve`. If you don't have less on your computer, you can get it here: [{less}](//lesscss.org/).


## Contributing

Did you find a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/hugo-startbootstrap-themes/hugo-vitality-theme) to let me know. Or make directly a [pull request](//github.com/hugo-startbootstrap-themes/hugo-vitality-theme/pulls).


## License

This theme is released under the Apache License 2.0 For more information read the [License](//github.com/digitalcraftsman/hugo-agency-theme/blob/master/LICENSE).

## Have fun!
