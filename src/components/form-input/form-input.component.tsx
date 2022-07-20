import {InputHTMLAttributes, FC} from "react";

import {Input, FormInputLabel, Group} from "./form-input-styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInputComponent: FC<FormInputProps> = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>{label}</FormInputLabel>
            )}
        </Group>

    )
}

export default FormInputComponent