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

To be done: create Contao Content Elements that use the Vue Components.

Once this is done: you can install the Contao Extension via composer as usual.