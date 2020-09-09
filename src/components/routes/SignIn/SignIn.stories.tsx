import * as React from 'react'
import { storiesOf } from '@storybook/react'
import SignIn from './SignIn'
import readme from './docs.md'

storiesOf('SignIn', module)
.addParameters({
readme: { content: readme },
options:{
theme:{}
}
})
.add('SignIn', () => {
return (
<SignIn />
)
})