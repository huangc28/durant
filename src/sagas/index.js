import { fork } from 'redux-saga/effects'
import forgotPasswordFlow from './forgotPassword'

export default function * root () {
  yield [
    fork(forgotPasswordFlow),
  ]
}
