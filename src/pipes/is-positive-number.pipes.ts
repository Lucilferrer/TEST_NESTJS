import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class IsPositiveNumber implements PipeTransform {
    transform(value: number, metadata: ArgumentMetadata) {
        if(value <= 0) {
            throw new BadRequestException('Number must be positive!!!!!!!!!!!');
        }
        return value;
    }
}