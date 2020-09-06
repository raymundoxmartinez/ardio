import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Avatar from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders Avatar', () => {
  it('should render the Avatar', () => {
    const { getByTestId } = render(<Avatar  />)
    assert.exists(getByTestId(''))
  })
})
