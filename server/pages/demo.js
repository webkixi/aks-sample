function index(oridata) {
  return {
    get: async function(ctx){
      oridata.fkp = 'Aotoo-koa-server'
      return oridata;
    },

    post: async function(ctx){
      return {pdata: 'post数据'}
    }
  }
}
export { index as getData }