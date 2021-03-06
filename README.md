# vuetaocharts

Charts with Vue.js and Contao. This is an experiment not yet ready for production.
Feedback is very welcome.


## Part one (Vue.js)

Dynamic charts with Vue.js


### Build Setup (Vue with Webpack)


#### Prerequisites

* `nodejs` `npm`, `vue`-Cli


#### Steps

* create project directory: `vue init webpack-simple vuetaocharts`
* change into newly created directory `cd vuetaocharts`
* put `*.vue` files into `src/components`
* use `index.html` instead of the newly created one
* use `src/main.js`  instead of the newly created one
* install dependencies with `npm install`
* serve with hot reload at `localhost:8080` with `npm run dev`
* or build with `npm run build`

lastly

* use `webpack.config.js` (provided by this repo as an example, adapt to your needs)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Part two (Contao)

See https://github.com/fiedsch/vuetaocharts-ce


### TODOs

* <del>separate the library code (i.e. vue.js) from the bundled code created by webpack.
  vue.js then has to be included in the Contao page layout (Idea: or by checking an
  option in the content element. Maybe not so good. Consider the following situation:
   we have more such elements on a page and only one of them includes vue.js.
   If this element gets deactivated it breaks the other elements).</del>

* <del>create the `.js` files for the Vue components. Apart from the possibility to manually
  write these find a way to use the single file components we already have.</del>
  bundle the `js` file(s) located in `dist/js` (created by `npm run build`) into one
  `js` file that will be included in a Contao page layout (e.g. `j_vutaocharts.html5`)
  and integrate the required parts from of `index.html` and `main.js`into the new Contao
  component's template.


### Ideas

  * use `<circle>` with `stroke-dashoffset` and/or `stroke-dasharray` as an alternative
  to `<path ...A...>` (See e.g. https://codepen.io/JMChristensen/pen/Ablch and
  https://css-tricks.com/almanac/properties/s/stroke-dashoffset/)
