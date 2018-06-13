import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../../routerConfig';
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
