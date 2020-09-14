import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontactComponent } from './createcontact.component';

describe('CreatecontactComponent', () => {
  let component: CreatecontactComponent;
  let fixture: ComponentFixture<CreatecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create component should return a positive value for this request ', () => {
    
     var value = component.getResult(-1);
     expect(value).toEqual(0);

     var value1 = component.getResult(200);
     expect(value1).toEqual(1);
  })
});
