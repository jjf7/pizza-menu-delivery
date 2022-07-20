import React, { useState } from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/Image";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";

const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();
  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  const handleCounter = (action) => {
    action === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity !== 1
      ? setQuantity((prev) => prev - 1)
      : null;
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            unoptimized
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {pizza.price[Size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                className={Size === 0 ? css.selected : null}
                onClick={() => setSize(0)}
              >
                Small
              </div>
              <div
                className={Size === 1 ? css.selected : null}
                onClick={() => setSize(1)}
              >
                Medium
              </div>
              <div
                className={Size === 2 ? css.selected : null}
                onClick={() => setSize(2)}
              >
                Large
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
              <Image
                src={LeftArrow}
                alt=""
                width={20}
                height={20}
                objectFit="contain"
                onClick={() => handleCounter("dec")}
              />

              <span>{Quantity}</span>

              <Image
                src={RightArrow}
                alt=""
                width={20}
                height={20}
                objectFit="contain"
                onClick={() => handleCounter("inc")}
              />
            </div>
          </div>

          <button className={`btn ${css.btn}`}>
            Add to Cart <span>($ {Quantity * pizza.price[Size]})</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
