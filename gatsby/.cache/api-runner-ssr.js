var plugins = [{
      plugin: require('C:/Users/DomAJ/Gatsby-Shop/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/DomAJ/Gatsby-Shop/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"v8fpwvkx","dataset":"production","watchMode":true,"token":"skIG0wOOcvsRqSFKkjzBUjta6wzZz6hsHVL0XNoBihwBUr8HrvQw5MwLLoy6YNlfIUp1Ym77SzNfJWrUyosJJ4Box0VHlX4N2im17QOmIQDG45MZu4mkZc37u9b3DSRtk5CA8nsyc27gsMkYKqOJTZieZsCUW6YYD7CxouUzvpkwTH7kVaRk"},
    },{
      plugin: require('C:/Users/DomAJ/Gatsby-Shop/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
