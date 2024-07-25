/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class ImageValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const maxSize = 4 * 1024 * 1024; // 4 MB
      if (value.size < maxSize) {
        return value;
        // throw new BadRequestException('File must be in 4 mb');
      }
    } catch (error) {
      fs.remove(value.path);
      throw new BadRequestException('File must be in 4 mb');
    }

    // const maxSize = 4 * 1024 * 1024; // 4 MB
    // const minSize = 1; // 1 byte

    // if (value.size < minSize || value.size > maxSize) {
    //   throw new BadRequestException(
    //     `File size must be between ${minSize} bytes and ${maxSize} bytes.`,
    //   );
    // }
  }
}
