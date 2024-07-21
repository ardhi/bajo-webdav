async function handler ({ item, options }) {
  const { error } = this.app.bajo
  const { isString, has } = this.app.bajo.lib._
  if (isString(item)) item = { name: item }
  if (!has(item, 'url')) throw this.error('Connection must have a \'url\'')
  item.options = item.options ?? {}
  item.anonymous = item.anonymous ?? false
}

async function init () {
  const { buildCollections } = this.app.bajo
  this.connections = await buildCollections({ ns: this.ns, handler, useDefaultName: true, dupChecks: ['name'] })
}

export default init
