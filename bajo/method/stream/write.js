async function write (path, opts, clientName) {
  await this.exists(path, undefined, clientName, undefined, true)
  return this.getClient(clientName).createWriteStream(path, opts)
}

export default write
