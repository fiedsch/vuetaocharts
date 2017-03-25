# vuetaocharts

Charts with Vue.js and Contao. This is an experiment not yet ready for production.
Feedback is very welcome.


## Part one (Vue.js)

Dynamic charts with Vue.js


### Build Setup (Vue with Webpack)

#### Prerequisites

* `nodejs` `npm`, `vue`-Cli

#### Steps

* create project directory: `vue init webpack vuetaocharts`
* change into newly created directory `cd vuetaocharts`
* put `*.vue` files into `src/components`
* use `index.html` instead of the newly created one
* use `main.js`  instead of the newly created one
* install dependencies with `npm install`
* serve with hot reload at `localhost:8080` with `npm run dev`

lastly

* change the created file `config/index.js` and adapt ``to your needs, e.g.
```javascript
// assetsPublicPath: '/',
// Example: changed to local path as we are serving from a sub directory
assetsPublicPath: '/~andreas/vuetaocharts',
```
this of course is only important for the `npm run build` step to build the production files.


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Part two (Contao)

To be done: <del>create Contao Content Elements that use the Vue Components.</del> 
Make that a package you can install the Contao Extension via composer as usual.


### TODOs

* separate the library code (i.e. vue.js) from the bundled code created by webpack.
  vue.js then has to be included in the Contao page layout (Idea: or by checking an 
  option in the content element. Maybe not so good. Consider the following situation: 
   we have more such elements on a page and only one of them includes vue.js. 
   If this element gets deactivated it breaks the other elements).
   
* <del>create a Contao content element that allows the user to enter the data for the chart.
  MultiColumnWizard or as plain JSON Code with `fiedsch/contao-components`. The component
  will have the required code for vue in its template.</del> See `src/contao`.
* <del>create the `.js` files for the Vue components. Apart from the possibility to manually 
  write these find a way to use the single file components we already have.</del>
  bundle the `js` files located in `build/js` ()created by `npm run build`) into one 
  `js` file that will be included in a Contao page layout (e.g. `j_vutaocharts.html5`)
  and integrate the required parts from of `index.html` and `main.js`into the new Contao
   component's template.

  
### Ideas
  
  * use `<circle>` with `stroke-dashoffset` and/or `stroke-dasharray` as an alternative 
  to `<path ...A...>` (See e.g. https://codepen.io/JMChristensen/pen/Ablch and 
  https://css-tricks.com/almanac/properties/s/stroke-dashoffset/)
   
  