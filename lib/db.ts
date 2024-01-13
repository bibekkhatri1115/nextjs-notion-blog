import { kv } from "@vercel/kv";

import { isRedisEnabled } from './config'

let db = null
if (isRedisEnabled) {
    db = kv
}

export { db }
