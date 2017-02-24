import { fork } from 'redux-saga/effects'
import helloWorldSaga from './helloWorld'
import forgotPasswordFlow from './forgotPassword'

export default function * root () {
  yield [
    fork(helloWorldSaga),
    fork(forgotPasswordFlow),
  ]
}
