import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService],
      imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'testing_db',
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }), TypeOrmModule.forFeature([Book])],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should increment when adding a new book', async () => {
   const books=await service.findAll()
   await service.create({name:"The Alchemist",author:"Paulo Coelho",pages:200,genre:"Romance"})
   const addedBooks=await service.findAll()
   expect(books.length+1).toEqual(addedBooks.length)
  });
  it('should decrement when deleting a book', async () => {
    const books=await service.findAll()
    if (books.length>0)
    {   const book=books[0]
      await service.remove(parseInt(book.id))
      const modifiedBooks=await service.findAll()
      expect(books.length-1).toEqual(modifiedBooks.length)
    }
   });
   it('should add a new book', async () => {
    const book=await service.create({name:"The Alchemist",author:"Paulo Coelho",pages:200,genre:"Romance"})
    const found=service.findOne(parseInt(book.id))
    expect(found).toBeTruthy()
   });
   it('should delete book', async () => {
    const books=await service.findAll()
    if (books.length>0)
    {   const book=books[0]
      await service.remove(parseInt(book.id))
      const found=await service.findOne(parseInt(book.id))
      expect(found).toBeFalsy()
    }
   });
  
});


