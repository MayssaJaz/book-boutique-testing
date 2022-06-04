import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private repository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.repository.save(createBookDto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const books= await this.repository.find({
      where: { id: id.toString() },
    });    
    if (books.length>0)
    return true
    return false
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number) {
    const booksToRemove = await this.repository.find({
      where: { id: id.toString() },
    });
    const books = await this.repository.remove(booksToRemove[0]);
    return books;
  }
}
function where(where: any, arg1: { id: number; }) {
  throw new Error('Function not implemented.');
}

