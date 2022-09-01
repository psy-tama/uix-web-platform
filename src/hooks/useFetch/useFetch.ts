import useSWR from 'swr';
import { sanitizeOptions } from './helper';

const fetcher = async (url: string, options?: any) => {
  const res = await fetch(url, options);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('Failed to fetch', { cause: res });
    throw error;
  }

  return res.json();
};

type FetchArgTypes = {
  url: string;
  options?: any;
  configOverride?: any;
  enabled?: boolean;
};

const useFetch = ({
  url,
  options,
  configOverride = {},
  enabled = true
}: FetchArgTypes) => {
  const config = {
    shouldRetryOnError: false
  };
  const sanitizedOptions = sanitizeOptions(options);
  const { data, error } = useSWR(
    () => (enabled ? [url, sanitizedOptions] : null),
    fetcher,
    {
      ...config,
      ...configOverride
    }
  );

  return { data, error };
};

export default useFetch;
