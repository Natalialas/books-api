import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1000)
  price: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  authorId: string;

  createdAt: Date;
  updatedAt: Date;
}
