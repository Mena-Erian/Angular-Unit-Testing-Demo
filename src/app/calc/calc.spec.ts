import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'zone.js';
import 'zone.js/testing';
import { Calc } from './calc';

describe('Calc', () => {
  let component: Calc;
  let fixture: ComponentFixture<Calc>;

  let num1: number, num2: number;
  num1 = num2 = 0;

  xdescribe('calc fucntion', () => {
    beforeAll(() => {
      console.log('Run Just one time before each it');
    });
    beforeEach(() => {
      console.log('Run Before Each it');
      num1 = 3;
      num2 = 2;
    });

    xit('general', () => {
      //                                ===
      expect(component.calc(num1, num2, '+')).toBeDefined();
    });
    //fit
    it('has + operator', () => {
      //                                ===
      expect(component.calc(num1, num2, '+')).toBe(5);
    });
    it('has - operator', () => {
      //                                ===
      expect(component.calc(num1, num2, '-')).toBe(1);
    });
    afterEach(() => {
      console.log('Run After each it');
    });
    afterAll(() => {
      console.log('Run Once After All it');
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calc],
    }).compileComponents();

    fixture = TestBed.createComponent(Calc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
