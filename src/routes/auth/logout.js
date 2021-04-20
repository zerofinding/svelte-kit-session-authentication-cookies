import stringHash from 'string-hash'
import * as cookie from 'cookie'
import { v4 as uuidv4 } from 'uuid'
import { Tedis } from 'tedis'

const db = new Tedis({
  host: '127.0.0.1',
  port: 6379
})

export async function get({context}){
  if(!context.authenticated){
    return {
      status: 401,
      body: {
        message: 'Unauthorized..'
      }
    }
  }

  const user = JSON.parse(await db.get(context.email))
  const cookieId = uuidv4()

  if (user) {
    delete user.password

    await db.set(cookieId, JSON.stringify({
      email: context.email,
    }))
  }

  const headers = {
    'Set-Cookie': cookie.serialize('session_id', cookieId, {
      httpOnly: true,
      maxAge: 0,
      sameSite: 'lax',
      path: '/'
    })
  }

  return {
    status: 401,
    headers,
    body: {
      message: 'Unauthorized..'
    }
  }
}
