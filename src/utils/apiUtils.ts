import { MongoErrorCode } from 'constants/error';
import { MongoDuplicateKeyError } from 'interfaces';

const isMongoDuplicateKeyError = (error: any): error is MongoDuplicateKeyError => {
  return error.code && error.code === MongoErrorCode.duplicateKey;
};

export { isMongoDuplicateKeyError };
