import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import ExperienceDetails from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders ExperienceDetails', () => {
  it('should render the ExperienceDetails', () => {
    const { getByTestId } = render(<ExperienceDetails  />)
    assert.exists(getByTestId(''))
  })
})
