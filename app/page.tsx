"use client";

// import Link from 'next/link';
import LogoMdc from "@/public/logo.svg";
import Image from "next/image";
import { Cursor, Typewriter } from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";

// import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image
        width={100}
        height={100}
        alt="Logo de Mdc"
        src={LogoMdc}
        className="mb-4 object-contain"
      />
      <h1 className="text-4xl md:text font-black mb-2 text-center uppercase flex items-center">
        <Typewriter
          typeSpeed={70}
          words={[
            '"Bienvenue"',
            '"Welcome"',
            '"Nyob zoo"',
            '"Benvenuto"',
            '"Vienvenido"',
          ]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>
      <p className="my-2 text-center">
        Rejoigner une aventure de codeur avec BUENS 18k ^^...
      </p>
      <ButtonsProvider />
    </section>
  );
}
