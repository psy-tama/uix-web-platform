export const sanitizeOptions = (options?: any): any => {
  const requestBody = options?.body;
  if (requestBody) {
    return {
      ...options,
      body: JSON.stringify(requestBody)
    };
  }
  return options;
};
