import { TestBed } from '@angular/core/testing';

import { FileUploaderService } from './file-uploader.service';
import { HttpClientModule } from '@angular/common/http';

describe('FileUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [FileUploaderService]
  }));

  it('should be created', () => {
    const service: FileUploaderService = TestBed.get(FileUploaderService);
    expect(service).toBeTruthy();
  });
});
