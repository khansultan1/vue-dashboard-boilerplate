module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
              loaders: {
                  'scss': 'vue-style-loader!css-loader!sass-loader',
                  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
              }
          }
      },
  
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // enable CSS Modules
              modules: true,
              // customize generated class names
              localIdentName: '[local]_[hash:base64:8]'
            }
          } 
         ]
        },
      {
    // Other configs...
    "globals": {
      "$": true,
      "jQuery": true
    }
  },
  
      ]
    }
  }

  