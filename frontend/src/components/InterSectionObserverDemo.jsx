import { useEffect, useRef, useState } from "react";

export default function InfiniteScrollList() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);
  const isLoadingRef = useRef(false);

  // Keep ref in sync with state
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoadingRef.current) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []); // Observer created once and never recreated

  useEffect(() => {
    if (page === 1) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setItems((prev) => {
        const newItems = Array.from({ length: 10 }, (_, i) => prev.length + i + 1);
        return [...prev, ...newItems];
      });
      setIsLoading(false);
    }, 1000);
  }, [page]); // Only depend on page, use functional update to access previous items

  return (
    <div style={{ maxHeight: "50vh", overflowY: "auto", padding: 20 }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: 20,
            margin: "10px 0",
            background: "#f2f2f2",
            borderRadius: 8,
          }}
        >
          Item #{item}
        </div>
      ))}
      <div ref={loaderRef} style={{ height: 40, textAlign: "center" }}>
        {isLoading ? "Loading..." : "Scroll for more"}
      </div>
    </div>
  );
}
