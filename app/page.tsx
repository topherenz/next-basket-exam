"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { GalleryCard, LatestCard, LoadMore, PostCard, ProductCard, ServicesCard, TestimonialCard } from "@/components";
import { ProductState } from "@/types";
import { fetchProducts } from "@/utils";

export default function Home() {
  const [allProducts, setAllProducts] = useState<ProductState>([]);
  const [loading, setLoading] = useState(false);

  // limit state
  const [limit, setLimit] = useState(10);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result = await fetchProducts({
        limit: limit || 10,
      });

      setAllProducts(result);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [limit]);

  return (
    <main>
      {/* Hero */}
      <section className="mn__hero w-full flex justify-center bg-white">
          <div className="w-full max-w-screen-xl grid grid-rows-4 grid-flow-col gap-4 px-6 py-20">
              <div className="row-span-1 lg:row-span-4 min-h-[18rem] lg:min-h-[38rem] text-2xl lg:text-[2.5rem]">
                  <LatestCard
                      lcBackgroundImage="card-cover-5.jpg"
                  />
              </div>
              <div className="row-span-1 lg:row-span-2 col-span-1 lg:col-span-2 text-2xl">
                  <LatestCard 
                      lcBackgroundImage="card-cover-8.jpg"
                  />
              </div>
              <div className="row-span-1 lg:row-span-2 col-span-1 text-2xl">
                  <LatestCard 
                      lcBackgroundImage="card-cover-6.jpg"
                  />
              </div>
              <div className="row-span-1 lg:row-span-2 col-span-1 text-2xl">
                  <LatestCard 
                      lcBackgroundImage="card-cover-7.jpg"
                  />
              </div>
          </div>
      </section>

      {/* Featured Products */}
      <section className="ftrd__products w-full flex justify-center bg-white tracking=[0.0125rem]">
        <div className="max-w-full w-[1080px] px-6 py-20">
          <div className="ftrd__product-hdr w-full text-center font-bold text-[#737373] flex flex-col gap-2.5 mb-14">
            <h3 className="capitalize text-xl">Featured Products</h3>
            <h2 className="uppercase text-2xl text-[#252B42] tracking=[0.0063rem]">BESTSELLER PRODUCTS</h2>
            <p className="text-sm">Problems trying to resolve the conflict between </p>
          </div>
          {allProducts.length > 0 ? (
            <div className="w-full">
              <div className="max-w-full w-[1080px] block mx-auto">
                <div className="ftrd__product-list w-full flex flex-wrap justify-center items-start gap-7">
                  {allProducts?.map((product) => (
                    <ProductCard  
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
                {loading && (
                  <Image
                    src='./loader.svg'
                    alt='loader'
                    width={50}
                    height={50}
                    className='object-contain max-w-full block mx-auto mt-20'
                  />
                )}
                <LoadMore
                    pageNumber={limit / 10}
                    isNext={limit > allProducts.length}
                    setLimit={setLimit}
                />
              </div>
            </div>
          ) : (
            !loading && (
              <div className="fp__error w-full flex flex-col justify-center bg-white">
                <div className="max-w-full w-[1080px]">
                  <h3>Sorry, there are no existing products.</h3>
                  <div><span>{allProducts?.message}</span></div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Services */}
      <section className="mn__services w-full flex justify-center bg-white tracking=[0.0125rem]">
        <div className="max-w-full w-[1080px] px-6 py-20">
          <div className="ftrd__product-hdr w-full text-center font-bold text-[#737373] flex flex-col gap-2.5 mb-20">
            <h3 className="capitalize text-xl">Featured Products</h3>
            <h2 className="uppercase text-2xl text-[#252B42] tracking=[0.0063rem]">THE BEST SERVICES</h2>
            <p className="text-sm">Problems trying to resolve the conflict between </p>
          </div>
          <div className="srvcs__list w-full flex flex-wrap justify-center items-start gap-7">
            <ServicesCard 
              scIconSrc="icon-easy-wins.svg"
              scTitle="Easy Wins"
              scDescription="Get your best looking smile now!"
            />
            <ServicesCard 
              scIconSrc="icon-concrete.svg"
              scTitle="Concrete"
              scDescription="Defalcate is most focused in helping you discover your most beautiful smile."
            />
            <ServicesCard 
              scIconSrc="icon-hack-growth.svg"
              scTitle="Hack Growth"
              scDescription="Overcame any hurdle or any other problem."
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="ftrd__posts w-full flex justify-center bg-white tracking=[0.0125rem]">
        <div className="max-w-full w-[1150px] px-6 py-20">
          <div className="ftrd__posts-hdr w-full text-center font-bold text-[#737373] flex flex-col gap-2.5 mb-20">
            <h3 className="capitalize text-sm text-[#23A6F0]">Practice Advice</h3>
            <h2 className="capitalize text-4xl text-[#252B42]">Featured Posts</h2>
          </div>
          <div className="ftrd__list w-full flex flex-wrap justify-center items-start gap-7">
            <PostCard 
              pcBackgroundImage="ftrd-post-img-a.jpg"
            />
            <PostCard 
              pcBackgroundImage="ftrd-post-img-b.png"
            />
            <PostCard 
              pcBackgroundImage="ftrd-post-img-c.png"
            />
          </div>
        </div>
      </section>

      {/* Testimonial and Gallery */}
      <section className="tstmnl__gllry w-full flex justify-center bg-[#FAFAFA] md:bg-white tracking=[0.0125rem]">
        <div className="max-w-full w-[1150px] flex flex-col xl:flex-row justify-between items-center px-6 py-20">
          <div className="mn__tstmnl w-full xl:w-2/5 flex flex-col gap-7 text-center mb-16 xl:mb-0">
            <div className="tstmnl__title">
              <h2 className="font-bold text-2xl text-[#252B42]">What they say about us</h2>
            </div>
            <div className="tstmnl__list flex flex-col gap-0">
              <TestimonialCard />
            </div>
          </div>
          <div className="mn__gllry w-full xl:w-2/4">
            <GalleryCard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mn__cta w-full flex justify-center tracking=[0.0125rem] mt-20 bg-no-repeat bg-cover bg-center bg-[url('../public/cta-background-a.jpg')]">
        <div className="max-w-full w-[38rem] flex flex-col px-6 pt-40 pb-28 gap-7 text-center">
          <h3 className="font-bold text-sm text-[#23A6F0]">Designing Better Experience</h3>
          <h2 className="font-bold text-4xl">Problems trying to resolve the conflict between</h2>
          <span className="text-sm text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics:</span>
          <span className="font-bold text-2xl text-[#23856D]">$16.48</span>
          <div>
            <Link href="" className="uppercase font-bold text-white px-10 py-4 max-w-full inline-block border border-[#23A6F0] bg-[#23A6F0] rounded-md">Add Your Call To Action</Link>
          </div>
        </div>
      </section>
    </main>
  )
}