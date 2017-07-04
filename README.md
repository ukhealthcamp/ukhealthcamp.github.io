# UKHealthCamp

UKHealthCamp is a free ‘unconference’ for everyone interested in digital, design, technology and data for health and care.

This Repository contains the source code to the http://ukhealthcamp.com/ website.

## Jekyll

This is a re-imagining of the UKHealthCamp website, now entirely built by Jekyll and 98% less full of unused vestigial Bootstrap css and boiler-plate. 
Previously the site was built from the https://github.com/ukhealthcamp/ukhealthcamp_website repository using Node and Bower.

Everything is now built from [Kramdown](https://kramdown.gettalong.org/) source files into html using the template in `_layouts` by Jekyll. CSS is compiled from stylesheets and SCSS file in `_sass` to a single compressed file.

### Controlling global "Alert Bar"

To display the "Alert Bar" on all pages set `show_alert: true` in `_config.yaml` and it will appear, to hide it set `show_alert: false`. To edit the contents of the bar simply edit `alert-bar.md` the file is (Mark)Kramdown.

### Page types

There are two templates `default.html` and `generic.html`. Default is a minimal template that simply adds appropriate html `<head>` content and the global "Alert Bar" (if enabled) and site footer. Generic is more prescriptive and adds a simple header bar and provides for simple "plain text" pages (of course (Mark)Kramdown is supported).

To select the appropriate template simply chose either `layout: default` of `layout: generic` in the file frontmatter.

## Getting Started

Simply edit (Mark)Kramdown files in your editor of choice and push, GitHub pages will do the rest of the magic.

If you feel you need to edit templates/play around locally:

### To set-up initially after cloning repo:

```
gem install bundler
bundle install
```

### To compile with Jekyll:

```
bundle exec jekyll serve
```

For more info on using Jekyll (GitHub Pages variety) locally see: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/