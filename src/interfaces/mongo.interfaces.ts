type MongoDuplicateKeyError = {
  code: string;
  keyPattern: object;
  keyValue: object;
};

export { MongoDuplicateKeyError };
