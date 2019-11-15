import * as Colors from './colors'
import * as Spacing from './spacing'

export const extraLargeFontSize = 32
export const largeFontSize = 24
export const buttonFontSize = 18
export const baseFontSize = 16
export const smallFontSize = 14
export const smallestFontSize = 10
export const largeHeaderFontSize = 20
export const headerFontSize = 18

const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

export const underlined = {
  textDecorationLine: 'underline',
}

export const bodyText = {
  color: Colors.shuttleGray,
  fontSize: smallFontSize,
  lineHeight: 19,
}

export const screenHeader = {
  ...base,
  backgroundColor: Colors.background,
  color: Colors.darkTextColors,
  fontSize: headerFontSize,
  borderBottomColor: Colors.border,
  borderBottomWidth: Spacing.border,
}

export const screenFooter = {
  ...base,
  backgroundColor: Colors.background,
  borderTopColor: Colors.border,
  borderTopWidth: Spacing.border,
  color: Colors.darkestColors,
  fontSize: headerFontSize,
  height: 40,
}

export const sectionHeader = {
  ...base,
  color: Colors.darkestGray,
  fontSize: largeHeaderFontSize,
  marginBottom: Spacing.base,
}

