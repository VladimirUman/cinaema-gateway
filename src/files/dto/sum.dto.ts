import { IsArray } from 'class-validator';

export class ShowSumDto {
    @IsArray()
    numbers: number[];
}
