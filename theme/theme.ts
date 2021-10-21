import { WGColor, WGCommonSize } from '@/shared/@types'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import {
  FontStyleOptions,
  TypographyOptions,
  TypographyStyleOptions,
  Variant,
} from '@material-ui/core/styles/createTypography'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    color?: WGColor
  }

  interface PaletteOptions {
    color?: WGColor
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    sizing?: SpacingOptions
    commonSize?: WGCommonSize
  }

  interface ThemeOptions {
    sizing?: SpacingOptions
    commonSize?: WGCommonSize
  }
}

declare module '@material-ui/core/styles/createTypography' {
  type CustomVariant = Variant | 'tag'

  interface Typography
    extends Record<CustomVariant, TypographyStyle>,
      FontStyle,
      TypographyUtils {}

  interface TypographyOptions
    extends Partial<
      Record<CustomVariant, TypographyStyleOptions> & FontStyleOptions
    > {}
}
