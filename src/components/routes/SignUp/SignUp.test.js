import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import SignUp from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders SignUp', () => {
  it('should render the SignUp', () => {
    const { getByTestId } = render(<SignUp  />)
    assert.exists(getByTestId(''))
  })
})
