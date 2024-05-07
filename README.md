# AuthZEN Interop React Component

A module providing a self-contained React component that describes the AuthZEN interop scenario and allows some interactive exploration.

It's factored into a module so that the target authorizer can be customized.

## Installing

```bash
yarn add @aserto/authzen-interop-react
```

## Importing

```javascript
import Component from '@aserto/authzen-interop-react'

export function App() {
  return (
    <Component name='Aserto' logo='logo.png' url='url' />
  )
}
```
