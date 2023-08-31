import { NativeValue, SizeTokens, StackProps, TamaguiComponentExpectingVariants, TamaguiElement } from '@tamagui/core';
import * as React from 'react';
import { SwitchProps as NativeSwitchProps } from 'react-native';
export declare const SwitchContext: import("@tamagui/core").StyledContext<{
    checked: boolean;
    disabled?: boolean | undefined;
    frameWidth: number;
    size?: SizeTokens | undefined;
    unstyled?: boolean | undefined;
}>;
type SwitchSharedProps = {
    size?: SizeTokens | number;
    unstyled?: boolean;
};
type SwitchBaseProps = StackProps & SwitchSharedProps;
export type SwitchExtraProps = {
    labeledBy?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    required?: boolean;
    native?: NativeValue<'mobile' | 'ios' | 'android'>;
    nativeProps?: NativeSwitchProps;
    onCheckedChange?(checked: boolean): void;
};
export type SwitchProps = SwitchBaseProps & SwitchExtraProps;
export declare function createSwitch<F extends TamaguiComponentExpectingVariants<SwitchProps, SwitchSharedProps & SwitchExtraProps>, T extends TamaguiComponentExpectingVariants<SwitchBaseProps, SwitchSharedProps>>({ Frame, Thumb, acceptsUnstyled }: {
    Frame: F;
    Thumb: T;
    acceptsUnstyled?: boolean;
}): React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children" | ("onLayout" | keyof import("react-native").GestureResponderHandlers) | "style"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | React.CSSProperties | (React.CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & SwitchSharedProps & SwitchExtraProps & React.RefAttributes<TamaguiElement>> & {
    Thumb: import("@tamagui/core").ReactComponentWithRef<Object & Omit<SwitchBaseProps, keyof Object>, any> & {
        staticConfig: import("@tamagui/core").StaticConfig;
        styleable: import("@tamagui/core").Styleable<SwitchBaseProps, any>;
    };
};
export {};
//# sourceMappingURL=createSwitch.d.ts.map