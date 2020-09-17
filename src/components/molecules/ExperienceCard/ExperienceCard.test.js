import * as React from 'react'
import { render } from '@testing-library/react'
import chai, { assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import ExperienceCard from './'

chai.use(chaiAsPromised)

let cleanup: any
beforeEach(() => (cleanup = require('jsdom-global')()))
afterEach(() => cleanup())
describe('Renders ExperienceCard', () => {
  it('should render the ExperienceCard', () => {
    const { getByTestId } = render(<ExperienceCard  />)
    assert.exists(getByTestId(''))
  })
})
