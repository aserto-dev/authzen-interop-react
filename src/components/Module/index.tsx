import React from 'react'

import Highlight from '../Highlight'

const modules: Record<string, string> = {
  'GET /users/:userId': `
package todoApp.GET.users.__userID

default allowed = true`,
  'GET /todos': `
package todoApp.GET.todos

default allowed = true`,
  'POST /todos': `
package todoApp.POST.todos

import future.keywords.in
import input.user

default allowed = false

allowed {
  allowedRoles := {"editor", "admin"}
  some x in allowedRoles
  user.properties.roles[_] == x
}`,
  'PUT /todos/:id': `
package todoApp.PUT.todos.__id

import future.keywords.in
import input.resource
import input.user

default allowed = false

allowed {
  user.properties.roles[_] == "editor"
  user.key == resource.ownerID
}

allowed {
  user.properties.roles[_] == "evil_genius"
}`,
  'DELETE /todos/:id': `
package todoApp.DELETE.todos.__id

import future.keywords.in
import input.resource
import input.user

default allowed = false

allowed {
  user.properties.roles[_] == "editor"
  user.key == resource.ownerID
}

allowed {
  user.properties.roles[_] == "admin"
}`,
}

const Module = ({ module }: { module: string }) => {
  return <Highlight language="rego">{modules[module] || ''}</Highlight>
}

export default Module
