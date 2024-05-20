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

export class UpdateBookDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Length(1, 5)
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
