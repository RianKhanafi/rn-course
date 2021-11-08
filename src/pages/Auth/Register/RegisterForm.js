import React, {useState} from 'react';
import Button from '~/component/button';
import Input from '~/component/input';
import apiUsers from '../../../constants/api/users';
import fieldError from '../../../helpers/fieldError';

export default function RegisterForm({navigation}) {
  const [state, setState] = useState({});
  const [error, setError] = useState([]);

  const onRegister = () => {
    apiUsers
      .register(state)
      .then(response => {
        if (response) {
          navigation.navigate('Login');
        }
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const ERROR = fieldError(error);

  return (
    <>
      <Input
        error={ERROR?.name?.message ?? null}
        label="Full Name"
        placeholder="Your name"
        value={state.name}
        onChangeText={e => setState({...state, name: e})}
        style={{marginTop: 15}}
      />
      <Input
        error={ERROR?.email?.message ?? null}
        label="Email Address"
        placeholder="Email Address"
        value={state.email}
        onChangeText={e => setState({...state, email: e})}
        style={{marginTop: 15}}
      />
      <Input
        error={ERROR?.password?.message ?? null}
        label="Password"
        placeholder="Your Password"
        value={state.password}
        onChangeText={e => setState({...state, password: e})}
        style={{marginTop: 15}}
        secureTextEntry={true}
      />
      <Input
        error={ERROR?.profession?.message ?? null}
        label="Profession"
        placeholder="Your Profession"
        value={state.profession}
        onChangeText={e => setState({...state, profession: e})}
        style={{marginTop: 15}}
      />
      <Button onPress={onRegister} title="Daftar" style={{marginTop: 15}} />
    </>
  );
}
