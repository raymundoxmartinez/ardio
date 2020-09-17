import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FileUpload from './FileUpload'
import readme from './docs.md'

storiesOf('FileUpload', module)
.addParameters({
readme: { content: readme },
options:{
theme:{}
}
})
.add('FileUpload', () => {
return (
<FileUpload />
)
})