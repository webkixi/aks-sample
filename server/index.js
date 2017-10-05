const path = require('path')
const aks = require('aotoo-koa-server')

const _mapper = {
  js: {
    demo: '/js/demo.js'
  },
  css: {
    demo: '/css/demo.css'
  }
}

const app = aks({
  root: path.join(__dirname, '../dist/html'),  
  index: 'demo',
  pages: path.join(__dirname, './pages'),
  pluginsFolder: path.join(__dirname, './plugins'),
  mapper: _mapper
})

app.statics(path.join(__dirname, '../dist/js'), {
  prefix: '/js'
})

app.statics(path.join(__dirname, '../dist/css'), {
  prefix: '/css'
})


app.listen(3000)