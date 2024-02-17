import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { signInWithPopup, getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const provider = new GoogleAuthProvider();

const SignInPage: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate('/get');
      })
      .catch((error) => {
        console.log(error.message);
        window.alert('ログインに失敗しました');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={signInWithGoogle} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : <GoogleIcon />}
      </Button>
    </div>
  );
}

export default SignInPage;