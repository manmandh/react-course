import React from 'react';
import { useParams } from 'react-router-dom';

const User: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return <div>User is: {userId}</div>
};

export default User;
