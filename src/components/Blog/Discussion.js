"use client";
import Giscus from "@giscus/react";

const Discussion = () => {
  return (
    <Giscus
      src="https://giscus.app/client.js"
      repo="edward-designer/nextjs-contentlayer-blog"
      repoId="R_kgDOKX75IA"
      category="General"
      categoryId="DIC_kwDOKX75IM4CZqfQ"
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
};

export default Discussion;
