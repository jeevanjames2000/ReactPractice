import React, { useEffect } from "react";

export default function useFetch(url) {

    
  useEffect(() => {
    const response = async () => {
      fetch(url).then((res) => res.json());
    };
  });

  return;
}
