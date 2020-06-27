/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-05-03T19:10:18+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

export class ExtendableException extends Error {
  constructor (message: string) {
    super(message)
    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
