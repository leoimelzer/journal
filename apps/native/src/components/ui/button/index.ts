import { Button as ButtonComponent } from './button.component'
import { ButtonIcon } from './icon'
import { ButtonText } from './text'

export const Button = Object.assign(ButtonComponent, {
  Icon: ButtonIcon,
  Text: ButtonText
})
