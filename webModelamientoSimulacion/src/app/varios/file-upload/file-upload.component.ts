import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input() public api: string = '';
  @Input() requiredFileType: string | undefined;
  constructor(private fileUploadService: FileUploadService) {}
  ngOnInit(): void {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable

  onChange(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService
      .upload(this.file!, this.api)
      .subscribe((event: any) => {
        console.log(event);
        // if (typeof event === 'object') {
        //   // Short link via api response

        //   this.loading = false; // Flag variable
        // }
      });
  }
}
