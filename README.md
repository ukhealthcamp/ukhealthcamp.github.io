# UKHealthCamp

UKHealthCamp is a free ‘unconference’ for everyone interested in digital, design, technology and data for health and care.

This Repository contains the source code to the http://ukhealthcamp.com/ website.

## Jekyll

This is a re-imagining of the UKHealthCamp website, now entirely built by Jekyll and 98% less full of unused vestigial Bootstrap css and boiler-plate. 
Previously the site was built from the https://github.com/ukhealthcamp/ukhealthcamp_website repository using Node and Bower.

Everything is now built from [Kramdown](https://kramdown.gettalong.org/) source files into html using the template in `_layouts` by Jekyll. CSS is compiled from stylesheets and SCSS file in `_sass` to a single compressed file.

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