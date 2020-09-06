import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import SideMenu from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders SideMenu', () => {
  it('should render the SideMenu', () => {
    const { getByTestId } = render(<SideMenu  />)
    assert.exists(getByTestId(''))
  })
})
