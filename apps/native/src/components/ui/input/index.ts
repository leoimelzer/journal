import { InputContent } from './content'
import { InputError } from './error'
import { InputIcon } from './icon'
import { Input as InputComponent } from './input.component'
import { InputLabel } from './label'
import { InputRoot } from './root'

export const Input = Object.assign(InputComponent, {
  Root: InputRoot,
  Label: InputLabel,
  Content: InputContent,
  Error: InputError,
  Icon: InputIcon
})
