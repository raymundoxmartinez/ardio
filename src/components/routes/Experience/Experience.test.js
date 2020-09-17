import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Experience from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders Experience', () => {
  it('should render the Experience', () => {
    const { getByTestId } = render(<Experience  />)
    assert.exists(getByTestId(''))
  })
})
