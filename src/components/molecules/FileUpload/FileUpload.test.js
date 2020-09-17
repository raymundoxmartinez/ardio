import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import FileUpload from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders FileUpload', () => {
  it('should render the FileUpload', () => {
    const { getByTestId } = render(<FileUpload  />)
    assert.exists(getByTestId(''))
  })
})
