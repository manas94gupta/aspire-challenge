import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface FetchResult<T> extends FetchState<T> {
  refetch: () => void;
}

export function useFetch<T, O = undefined>(
  input: string | ((options: O) => Promise<T>),
  options?: O
): FetchResult<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const fetchData = useCallback(async () => {
    setState({
      data: null,
      loading: true,
      error: null,
      success: false,
    });

    try {
      let data: T;
      if (typeof input === 'string') {
        const response = await fetch(input, options as RequestInit);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = (await response.json()) as T;
      } else {
        data = await input(options as O);
      }

      setState({
        data,
        loading: false,
        error: null,
        success: true,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setState({
        data: null,
        loading: false,
        error: error.message,
        success: false,
      });
    }
  }, [input, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
}
