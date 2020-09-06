import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import AppLayout from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders AppLayout', () => {
  it('should render the AppLayout', () => {
    const { getByTestId } = render(<AppLayout  />)
    assert.exists(getByTestId(''))
  })
})
