import React, {
    useCallback,
} from 'react';
// import { useHistory } from 'react-router-dom';

import {
    Grid,
    TextField,
    Button,
} from '@material-ui/core';

import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container } from './styles';

interface ISignInForm {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    // const history = useHistory();

    const { signIn, user } = useAuth();
    const { addToast } = useToast();

    const handleToastError = useCallback(() => {
        addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Ocorreu um erro ao fazer login. Cheque as credenciais.',
        });
    }, [addToast]);

    const handleSubmitSignIn = useCallback(async (data: ISignInForm) => {
        try {
            await signIn({
                email: data.email,
                password: data.password,
            });

            if(user.name === '') {
                handleToastError();
            }

            // history.push('/dashboard');

            addToast({
                type: 'success',
                title: 'Logado',
                description: 'Você já pode navegar!',
            });
        } catch(err) {
            handleToastError();
        }
    }, [addToast, signIn, user, handleToastError]);

    return (
        <Container>
            <Grid container component="main">
                <Grid item xs={false} md={7} sm={false} className="signIn-image" />
                <Grid item xs={12} md={5} sm={12} className="signIn-content">
                    <h1>Login</h1>

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={handleSubmitSignIn}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup
                                    .string()
                                    .required('E-mail obrigatório'),
                                password: Yup
                                    .string()
                                    .required('Senha obrigatória'),
                            })
                        }
                    >
                        {(props: FormikProps<ISignInForm>) => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        } = props;
                            return (
                                <Form>
                                    <TextField
                                        variant="outlined"
                                        name="email"
                                        id="email"
                                        label="E-mail"
                                        value={values.email}
                                        type="email"
                                        helperText={
                                            errors.email && touched.email
                                                ? errors.email
                                                : 'Insira o endereço de e-mail'
                                        }
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    <TextField
                                        variant="outlined"
                                        name="password"
                                        id="password"
                                        label="Senha"
                                        value={values.password}
                                        type="password"
                                        helperText={
                                            errors.password && touched.password
                                                ? errors.password
                                                : 'Insira a senha'
                                        }
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                    >
                                        Entrar
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignIn;
