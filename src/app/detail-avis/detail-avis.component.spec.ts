import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAvisComponent } from './detail-avis.component';

describe('DetailAvisComponent', () => {
  let component: DetailAvisComponent;
  let fixture: ComponentFixture<DetailAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
