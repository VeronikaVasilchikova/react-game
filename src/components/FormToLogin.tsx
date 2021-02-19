import React, {useState} from 'react';

export const FormToLogin: React.FunctionComponent = () => {
  const [userName, setUserName] = useState<string>('');

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  return (
    <div className="input-field mt2">
      <input
        value="userName"
        type="text"
        id="userName"
        placeholder="Enter your name"
        onChange={changeNameHandler}
      />
      <label htmlFor="userName" className="active">
        Enter your name
      </label>
    </div>
  )
}
