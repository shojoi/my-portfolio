import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import marguerite from '../assets/marguerite-729510__340.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}
function About() {
  const [author, setAuthor] = useState(null)
  sanityClient
    .fetch(
      `*[_type =="author"]{
    name,
    bio,
    "authorImage":image.asset->url
  }`,
    )
    .then((data) => setAuthor(data[0]))
    .catch((error) => console.log(error))

  if (!author) return <div> Loading...</div>

  return (
    <>
      <section className="relative ">
        <img src={marguerite} alt="marguerite" className="absolute w-full" />
        <div className="p-10 lg:pt-48 container mx-auto relative">
          <section className="bg-green-80-0 rounded-lg shadow-2xl lg:flex p-20">
            <img
              src={urlFor(author.authorImage).url()}
              alt="author"
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-6xl text-green-300 mb-4">
                Hey I'm Shobha Joshi
                <span className="text-green-100">{author.name}</span>
              </h1>
              <div className="prox lg:prox-xl text-white">
                <BlockContent
                  block={author.bio}
                  projectId="r99w5jgb"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
