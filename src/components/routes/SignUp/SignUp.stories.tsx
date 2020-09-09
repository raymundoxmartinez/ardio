import * as React from 'react'
import { storiesOf } from '@storybook/react'
import SignUp from './SignUp'
import readme from './docs.md'

storiesOf('SignUp', module)
.addParameters({
readme: { content: readme },
options:{
theme:{}
}
})
.add('SignUp', () => {
return (
<SignUp />
)
})