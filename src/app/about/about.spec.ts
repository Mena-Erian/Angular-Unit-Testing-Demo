import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should Have userName && is === 'Mena'", () => {
    expect(component.userName).toBeDefined();
    expect(component.userName).toBe('Mena');
  });

  it('Should render userName in HTML', () => {
    let componentHTML: HTMLElement = fixture.nativeElement;

    expect(componentHTML.querySelector('h2')?.textContent).toContain('Mena');
  });
});
