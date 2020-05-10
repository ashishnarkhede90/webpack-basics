import React from 'react'
import { render } from 'react-dom'

const Greeting = () => <h1>Hello from react</h1>

render(
    <Greeting />,
    document.getElementById('target')
)