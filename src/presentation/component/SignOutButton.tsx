import React from 'react';
import { Button } from '@mui/material';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignOutButton: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // ログアウト成功時の処理
        console.log('User signed out');
        navigate('/');
      })
      .catch((error) => {
        // エラーハンドリング
        console.log('Failed to sign out', error);
      });
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSignOut}>
      Sign out
    </Button>
  );
}

export default SignOutButton;