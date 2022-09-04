export const sanitizeOptions = (
  options?: RequestInit
): RequestInit | undefined => {
  const requestBody = options?.body;

  if (requestBody) {
    return {
      ...options,
      body: JSON.stringify(requestBody)
    };
  }

  return options;
};
