import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Experience from './Experience'
import readme from './docs.md'

storiesOf('Experience', module)
.addParameters({
readme: { content: readme },
options:{
theme:{}
}
})
.add('Experience', () => {
return (
<Experience />
)
})