async function read (path, opts, clientName) {
  await this.exists(path, undefined, clientName)
  return this.getClient(clientName).createReadStream(path, opts)
}

export default read
