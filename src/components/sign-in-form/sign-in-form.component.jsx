import {useState, useContext} from "react";
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInputComponent from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import ButtonComponent from "../button/button.component";

import{UserContext} from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: ''
}
const SignInFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password' :
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found' :
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error);
                    break;
            }

            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInputComponent label='Email'
                                    type='email'
                                    required
                                    onChange={handleChange}
                                    name='email'
                                    value={email}/>

                <FormInputComponent label='Password'
                                    type='password'
                                    required
                                    onChange={handleChange}
                                    name='password'
                                    value={password}/>
                <div className='buttons-container'>
                    <ButtonComponent type='submit'>
                        Sign In
                    </ButtonComponent>
                    <ButtonComponent type='button'
                                     buttonType='google'
                                     onClick={signInWithGoogle}>
                        Google Sign In
                    </ButtonComponent>
                </div>

            </form>
        </div>
    )
}

export default SignInFormComponent;