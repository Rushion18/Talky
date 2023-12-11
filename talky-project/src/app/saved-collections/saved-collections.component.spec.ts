import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCollectionsComponent } from './saved-collections.component';

describe('SavedCollectionsComponent', () => {
  let component: SavedCollectionsComponent;
  let fixture: ComponentFixture<SavedCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCollectionsComponent]
    });
    fixture = TestBed.createComponent(SavedCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
