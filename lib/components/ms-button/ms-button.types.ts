export enum MsButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum MsButtonAppearance {
  Secondary = 'secondary',
  Primary = 'primary',
  Outline = 'outline',
  Subtle = 'subtle',
  Transparent = 'transparent',
}

export enum MsButtonIconPosition {
  Before = 'before',
  After = 'after',
}

export enum MsButtonShape {
  Rounded = 'rounded',
  Circular = 'circular',
  Square = 'square',
}

export interface MsButtonProps {
  /**
   * A button can have its content and borders styled for greater emphasis or to be subtle.
   * - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
   * - 'primary': Emphasizes the button as a primary action.
   * - 'outline': Removes background styling.
   * - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
   * - 'transparent': Removes background and border styling.
   *
   * @default 'secondary'
   */
  appearance?: MsButtonAppearance

  /**
   * When set, allows the button to be focusable even when it has been disabled. This is used in scenarios where it
   * is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this
   * pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.
   *
   * @default false
   */
  disabledFocusable?: boolean

  /**
   * A button can show that it cannot be interacted with.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * A button can format its icon to appear before or after its content.
   *
   * @default 'before'
   */
  iconPosition?: MsButtonIconPosition

  /**
   * A button can be rounded, circular, or square.
   *
   * @default 'rounded'
   */
  shape?: MsButtonShape

  /**
   * A button supports different sizes.
   *
   * @default 'medium'
   */
  size?: MsButtonSize

  /**
   * A button can contain only an icon.
   *
   * @default false
   */
  iconOnly?: boolean

  icon?: string

  as?: 'button' | 'a'
}
