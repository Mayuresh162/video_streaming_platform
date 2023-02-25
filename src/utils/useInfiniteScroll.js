import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector } from "react-redux";

function useInfiniteScroll() {
  const [page, setPage] = useState(null);
  const loadMoreRef = useRef(null);

  const pageToken = useSelector(store => store.token.pageToken);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setPage(pageToken);
    }
  }, [pageToken]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, page };
}

export default useInfiniteScroll;