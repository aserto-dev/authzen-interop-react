import React from 'react'

import Highlight from '../Highlight'

const modules: Record<string, string> = {
  'GET /users/:userId': `
package todoApp.can_read_user

default allowed = true`,
  'GET /todos': `
package todoApp.can_read_todos

default allowed = true`,
  'POST /todos': `
package todoApp.can_create_todo

import future.keywords.in
import input.user

default allowed = false

allowed {
  allowedRoles := {"editor", "admin"}
  some x in allowedRoles
  user.properties.roles[_] == x
}`,
  'PUT /todos/:id': `
package todoApp.can_update_todo

import input.resource
import input.user

default allowed = false

allowed {
  user.properties.roles[_] == "editor"
  user.id == resource.properties.ownerID
}

allowed {
  user.properties.roles[_] == "evil_genius"
}`,
  'DELETE /todos/:id': `
package todoApp.can_delete_todo

import input.resource
import input.user

default allowed = false

allowed {
  user.properties.roles[_] == "editor"
  user.id == resource.properties.ownerID
}

allowed {
  user.properties.roles[_] == "admin"
}`,
}

const Module = ({ module }: { module: string }) => {
  return <Highlight language="rego">{modules[module] || ''}</Highlight>
}

export default Module
