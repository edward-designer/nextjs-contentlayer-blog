"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    if (noCount) return;
    const incrementView = async () => {
      try {
        let { data, error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
      } catch (e) {
        console.log(e);
      }
    };
    incrementView();
  }, [noCount, slug]);

  useEffect(() => {
    const getView = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug })
          .single();
        setViews(data ? data.count : 1);
      } catch (e) {
        console.log(e);
      }
    };
    getView();
  }, [slug]);

  if (!showCount) return;

  return <div>{views} views</div>;
};

export default ViewCounter;
