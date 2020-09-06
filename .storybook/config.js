import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { addReadme } from 'storybook-readme'

global.___loader = {
    enqueue: () => { },
    hovering: () => { },
}

global.__PATH_PREFIX__ = ''
window.___navigate = (pathname) => {
    action('NavigateTo:')(pathname)
}

const req = require.context('../src/components', true, /\.stories\.tsx$/)
addDecorator(addReadme)
function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
