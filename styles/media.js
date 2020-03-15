import { css } from 'styled-components'
import typography from './typography'

export default {
  all: (...args) => css(...args),
  small: (...args) => css`
    @media (max-width: ${typography.values.md}px) {
      ${css(...args)};
    }
  `,
  gtSmall: (...args) => css`
    @media (min-width: ${typography.values.md + 1}px) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${typography.values.md + 1}px and max-width ${
  typography.values.lg
}px) {
      ${css(...args)};
    }
  `,
  gtMedium: (...args) => css`
    @media (min-width: ${typography.values.md + 1}px) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: ${typography.values.lg + 1}px) {
      ${css(...args)};
    }
  `,
  gtLarge: (...args) => css`
    @media (min-width: ${typography.values.lg + 1}px) {
      ${css(...args)};
    }
  `
}
