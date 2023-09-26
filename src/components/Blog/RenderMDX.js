"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponent = {
  Image,
};

const RenderMDX = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return <MDXContent components={mdxComponent} />;
};

export default RenderMDX;
