async function quota (opts, clientName) {
  const data = await this.getClient(clientName).quota(opts)
  return { data }
}

export default quota
