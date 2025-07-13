import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import 'zone.js';
import 'zone.js/testing';
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, UnitTesting'
    );
  });

  it("Should Have userName && is === 'Mena'", () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.userName).toBeDefined();
    expect(app.userName).toBe('Mena');
  });

  it('Should render userName in HTML', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    let componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.querySelector('h2')?.textContent).toContain('Mena');
  });
});
