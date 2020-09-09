import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import SignIn from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders SignIn', () => {
  it('should render the SignIn', () => {
    const { getByTestId } = render(<SignIn  />)
    assert.exists(getByTestId(''))
  })
})
