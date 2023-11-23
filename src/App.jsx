import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

function App() {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });
  const [state, intState] = useState(false);

  const onSubmit = (data) => {
    alert('Вы успешно авторизовались! ' + JSON.stringify(data.email));
    intState(true);
    reset();
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label >
            Введите email
            <input {...register("email", {
              required: true,
              pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
            })} className="email-input" />
          </label>
          <div style={{ height: 40, fontSize: 15 }}>
            {errors?.email && <p>{errors?.email?.message || "Не корректно введен email"}</p>}
          </div>
          <label>
            Введите пароль
            <input type="password" {...register("password", {
              required: true,
            })} className='password-input' />
          </label>
          <div style={{ height: 40, fontSize: 15 }}>
            {errors?.password && <p>{errors?.password?.message || "Не правильный пароль!"}</p>}
          </div>
          <input type='submit' value="Войти" disabled={!isValid} className='btn' onClick={onSubmit}/>
          
          {state ? (
          <div>Вы успешно авторизовались! </div>
            ) : ''
          }


        </form>
        <a href="https://github.com/ILFIR803/react-forms2">github</a>
      </header>
      
    </div>
  );
}

export default App;
