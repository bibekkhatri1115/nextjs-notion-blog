import { kv } from "@vercel/kv";

import { isRedisEnabled, redisNamespace, redisUrl } from './config'

let db = null
if (isRedisEnabled) {
    db = kv
}

export { db }
