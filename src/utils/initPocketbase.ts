import PocketBase from 'pocketbase'

const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL

const pb = new PocketBase(pocketbaseUrl)

export default pb
