import React from 'react';
import Image from 'next/image';
import azeheer from 'public/azeheer.png';
import Link from "next/link";

const About = () => {
  return (
      <div className=''>
          <h1 className="text-center text-xl md:text-3xl mx-auto mb-7 font-bold p-5">Lets get in touch</h1>
      <article>
        {' '}
        <Image
          src={azeheer}
          alt=''
          className='p-5 text-center mx-auto'
          width={900}
          height={400}
        />
      </article>
      <section className='grid grid-cols-2 gap-3 p-5'>
        <article>
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-8 font-bold">Who are we?</h1>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            odit id laudantium distinctio aperiam, quidem reprehenderit quas
            dolor autem fuga nesciunt mollitia dolorem, deleniti harum quibusdam
            perspiciatis, vel ullam magni voluptatibus cumque. Ad corrupti est
            neque atque perspiciatis, exercitationem a velit in!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum
            provident veniam inventore totam saepe itaque, voluptatum vero
            repellat quibusdam dolores numquam cumque nihil! Soluta sequi odio,
            assumenda maiores suscipit eius ipsa eaque facere.
          </p>
        </article>
        <article>
          <h1 className="text-xl md:text-2xl lg:text- mb-8 font-bold">What we do?</h1>
          <p className="mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            veniam delectus ea unde nihil iure dolorem vero natus reiciendis
            eveniet tenetur ex quo consequatur obcaecati ratione dolore corporis
            aliquam doloribus a iusto, nam doloremque enim veritatis accusamus?
            Aliquam maiores sint voluptatum velit.
                  </p>
                  <p>
                      -Mobile Apps <br />
                      -Fast and quality <br />
                      -Dynamic and interactive web apps
                  </p>
                  <button className="bg-green-600 rounded p-4 text-white mt-8 animate-pulse"><Link href='/contact '>Contact</Link></button>
        </article>
      </section>
    </div>
  );
};

export default About;
