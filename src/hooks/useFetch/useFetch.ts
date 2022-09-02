import useSWR, { Key, Fetcher, SWRResponse } from 'swr';
import { sanitizeOptions } from './helper';

interface FetchArgTypes {
  url: string;
  options?: RequestInit;
  configOverride?: RequestInit;
  enabled?: boolean;
}

const useFetch = <T>({
  url,
  options,
  configOverride = {},
  enabled = true
}: FetchArgTypes): SWRResponse<T, Error> => {
  const fetcher: Fetcher<T, Key> = async (
    url: string,
    options?: RequestInit
  ): Promise<T> => {
    const res = await fetch(url, options);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error: Error = new Error('Failed to fetch');
      throw error;
    }

    return res.json();
  };

  const config = {
    shouldRetryOnError: false
  };
  const sanitizedOptions = sanitizeOptions(options);
  return useSWR<T, Error>(
    () => (enabled ? [url, sanitizedOptions] : null),
    fetcher,
    {
      ...config,
      ...configOverride
    }
  );
};

export default useFetch;
