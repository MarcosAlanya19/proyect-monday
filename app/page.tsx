'use client';

import CardProyect from '@/components/card';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Home() {

  return (
    <div className='grid gap-10'>
      <div className='grid grid-cols-2 gap-40'>
        <div className='flex flex-col justify-center gap-4'>
          <div className='font-bold text-6xl'>EducaCultura: Tu Puerta al Saber Global</div>
          <div className='text-gray-400'>Explora, Aprende, Crece: ¡Conéctate con el Conocimiento en Nuestra Plataforma Educativa/Cultural en Línea!</div>
        </div>
        <Image src='./img/img-slogan.png' alt='img-slogan' width={700} height={700} />
      </div>
      <div className='grid gap-3'>
        <h2 className='text-2xl uppercase font-medium'>Cursos</h2>
        <section className='grid grid-cols-4 gap-4'>
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
        </section>
      </div>
      <div className='grid gap-3'>
        <h2 className='text-2xl uppercase font-medium'>Cultura</h2>
        <section className='grid grid-cols-4 gap-4'>
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
        </section>
      </div>
    </div>
  );
}
