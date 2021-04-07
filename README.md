# Personal Website
my personal website, using Jekyll on gh-pages and a modification of the [Uno](https://github.com/joshgerdes/jekyll-uno) theme.

Modifications include: 


- Adding a "Projects" page, which in itself is a blog, limited by category from the standard blog. (all posts with category "Projects" will be filtered out)
- Adding a "Resume" page with a static html resume. All blog posts with the category "Resume" will be hidden. (Made best efforts to make static resume responsive)
- Smooth transition between all three pages (using AJAX - as an SPA).
- Replacing FB/twitter with mastodon/matrix
- Small visual touches

Planned:

- [x] Removing Disqus for a more privacy respecting alternative (~~github comments?~~ Staticman ~~? hyvor?~~)
- Making the pages "closable" (going back to the landing page)
- [x] Replacing icon font (as mastodon/matrix are currently using generic icons) (replaced with font awesome)
- Decide if I should filter out Projects and Resume from the RSS feed. Liquid makes this easy but don't mind showing atleast projects there.
- Perhaps having a timeline with github icons (see TZühlke) for the projects instead of posts. Post functionallity should ideally be kept for longer writhings
- Making the theme separate from my personal website, when I'm done with all of those. 

