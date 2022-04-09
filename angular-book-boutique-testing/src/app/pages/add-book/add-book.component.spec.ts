import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BookHandlerService } from 'src/app/services/book-handler.service';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: BookHandlerService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should containt `Book's name`", () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#book-label')?.textContent).toContain(
      "Book's name"
    );
  });
  it('should containt `Author`', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#author-label')?.textContent).toContain(
      'Author'
    );
  });
  it('should containt `Genre`', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#genre-label')?.textContent).toContain(
      'Genre'
    );
  });
  it("should containt `Book's number of pages`", () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#pages-label')?.textContent).toContain(
      "Book's number of pages"
    );
  });
});