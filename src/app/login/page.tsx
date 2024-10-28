"use client"
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="flex min-h-screen w-screen bg-[#F0F4FF]">
      {/* Sol kısım, sadece büyük ekranlarda gösterilecek */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-white border border-gray-200 rounded-xl relative">
        {/* Büyük arka plan logosu */}
        <div className="absolute top-[-30px] left-[45px] z-0">
          <Image
            src="/loginbüyük.svg"
            alt="Background Logo"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Küçük logo ve içerik */}
        <div className="relative z-10 text-center">
          <Image
            src="/loginküçük.svg"
            alt="Company Logo"
            width={680}
            height={680}
          />
          <div className="mt-4">
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm text-gray-500">msegroup.com</p>
            <p className="text-sm text-gray-500">0242 606 24 24</p>
          </div>
        </div>
      </div>

      {/* Sağ kısım, her zaman görünecek */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#F0F4FF] p-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Sign In</h2>
        <p className="text-sm text-gray-500 mb-8">Welcome, Lorem ipsum dolor sit amet.</p>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              placeholder="********"
            />
            <a href="/forgot-password" className="text-xs text-blue-500 mt-2 inline-block">I forgot my password</a>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-bold transition-colors hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Do not have an account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
