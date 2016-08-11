###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  def get_content
    json_file = File.read('source/baby-steps-content.json')
    json_data = JSON.parse(json_file)
  end

  def get_friends
    json_file = File.read('source/baby-steps.json')
    json_data = JSON.parse(json_file)
  end
end

ignore 'assets/javascripts/base.js'
ignore 'baby-steps-content.json'

activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end

set :partials_dir, 'assets/partials'
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
