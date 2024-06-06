import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

fdescribe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(component.add(1,2)).toEqual(3);
  })

  it('should divide two numbers',()=>{
    expect(component.divide(6,2)).toEqual(3);
  })

  it('should throw error when dividing by zero', () => {
    expect(() => component.divide(5,0)).toThrowError('can not divide by zero');
  });
});
