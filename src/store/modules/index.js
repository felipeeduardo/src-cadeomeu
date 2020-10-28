import auth from './auth'
import user from './user'
import stock from './stock'
import common from './common'

const vuex = { auth, user, stock, common }

const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
