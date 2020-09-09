import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Profile from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders Profile', () => {
  it('should render the Profile', () => {
    const { getByTestId } = render(<Profile  />)
    assert.exists(getByTestId(''))
  })
})
