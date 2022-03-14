import { useEffect, useState } from "react";

export default function useDebound(query = "", delay = 1000) {
  const [deboundQuery, setDeboundQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboundQuery(query);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query, delay]);

  return deboundQuery;
}
