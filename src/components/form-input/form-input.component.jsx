import {FormInput, FormInputLabel, Group} from "./form-input-styles";

const FormInputComponent = ({label, ...otherProps}) => {
    return (
        <Group>
            <FormInput {...otherProps} />
            {label && (
                <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>{label}</FormInputLabel>
            )}
        </Group>

    )
}

export default FormInputComponent