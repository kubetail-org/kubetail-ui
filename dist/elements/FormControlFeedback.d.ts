/// <reference types="react" />
interface Props extends React.ComponentPropsWithoutRef<'div'> {
    as?: React.ElementType;
}
declare const FormControlFeedback: {
    ({ as, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default FormControlFeedback;
