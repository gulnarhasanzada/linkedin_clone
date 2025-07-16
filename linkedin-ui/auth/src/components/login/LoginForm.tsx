import React, { useState } from 'react';
import { useAuth, type AuthData } from '../../context/AuthProvider';
import { Button, Field, HStack, Input, InputGroup, Stack, Switch } from '@chakra-ui/react';
import { MdAlternateEmail } from "react-icons/md";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/PasswordInput"
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router';

const LoginForm = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: AuthData  = {
        email,
        password
    }
    await login(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="border border-black-200 w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <h1 className='font-medium text-2xl mb-4'>Log In</h1>
        <div className="text-xs mb-3 mt-5">
          <span>Need an account?</span>
          <Link to="/signup" className='ml-2 text-purple-600 cursor-pointer font-medium underline'>Create an account</Link>
        </div>
        <p className='text-red-700 font-medium text-md'>{error}</p>
        <form onSubmit={handleSubmit} className="w-full">
          <Stack gap="4" align="flex-start" maxW="sm">
            <Field.Root>
              <Field.Label className='mt-3 text-md text-gray-900'>Email</Field.Label>
              <InputGroup
                className="flex items-center border border-black-200 rounded-sm overflow-hidden"
                startAddon={
                  <div className="bg-black-200 p-2 flex items-center justify-center rounded-l-sm">
                    <MdAlternateEmail className="text-black" />
                  </div>
                }
              >
                <Input
                  type="email"
                  className="flex-1 border-0 rounded-r-sm focus:outline-none focus:ring-0 px-2"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </InputGroup>
              <Field.ErrorText></Field.ErrorText>
            </Field.Root>

            <Field.Root>
              <Field.Label className='mt-3 text-md text-gray-900'>Password</Field.Label>
              <InputGroup
                className="flex items-center border border-black-100 rounded-sm overflow-hidden"
                startAddon={
                  <div className="bg-black-200 p-2 flex items-center justify-center rounded-l-sm">
                    <RiLockPasswordLine className="text-black" />
                  </div>
                }
              >
                <PasswordInput 
                  className="flex-1 border-0 rounded-r-sm px-2 focus:outline-none"
                  onChange={(e)=>setPassword(e.target.value)}
                  name='password'/>
              </InputGroup>
              <Field.ErrorText>Error</Field.ErrorText>
            </Field.Root>

            <Button type="submit" className="w-full bg-purple-600 text-white mt-3 font-medium">
              Submit
            </Button>
          </Stack>
        </form>
        <div className="text-xs mb-3 mt-5">
          <Link to="/forgot-password" className='text-purple-600 cursor-pointer font-medium underline'>Forgot password?</Link>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
