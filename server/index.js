const path = require('path')
const logger = require('koa-logger')
const aks = require('aotoo-koa-server')

const _mapper = {
  js: {
    demo: 'demo.js'
  },
  css: {
    demo: 'demo.css'
  }
}

const app = aks({
  root: path.join(__dirname, '../dist/html'),  
  index: 'demo',
  pages: path.join(__dirname, './pages'),
  pluginsFolder: path.join(__dirname, './plugins'),
  mapper: _mapper
})

app.use(logger())

app.statics(path.join(__dirname, '../dist/js'), {
  prefix: '/js'
})

app.statics(path.join(__dirname, '../dist/css'), {
  prefix: '/css'
})


app.listen(3000)