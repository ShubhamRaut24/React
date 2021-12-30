import Center from "../src/Components/Decorator/Center"
import {addDecorator} from '@storybook/react'
import '@storybook/addon-console'
import {withA11y} from '@storybook/addon-a11y'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
}
// export const parameters = {
//   options: {
//     storySort: (a, b) =>
//       a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
//   },
// };

addDecorator(story => <Center>{story()}</Center>)
addDecorator(withA11y)