import React from 'react';
import useInputs from '../../hooks/use-inputs';
import PropTypes from 'prop-types';


function SignInForm({onSubmit}) {
  const [handleSubmit, isError, isError400, loginRef, passwordRef] = useInputs(onSubmit);

  return (
    <form
      className="login__form form"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">

        {
          isError400
          &&
          <span className="login__error-text">
            The entered data is incorrect
          </span>
        }
        <label className="visually-hidden">E-mail</label>
        <input
          ref={loginRef}
          className="login__input form__input"
          type="email" name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">

        {
          isError
          &&
          <span className="login__error-text">
            The password cannot contain only spaces
          </span>
        }

        <label className="visually-hidden">Password</label>
        <input
          ref={passwordRef}
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>

    </form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
