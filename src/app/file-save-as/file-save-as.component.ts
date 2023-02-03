import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-save-as',
  templateUrl: './file-save-as.component.html',
  styleUrls: ['./file-save-as.component.css']
})
export class FileSaveAsComponent {
  @Input() fileContent: any;

  saveAsProject(){
    //you can enter your own file name and extension
    this.writeContents(this.fileContent, 'Sample File'+'.txt', 'text/plain');
  }
  writeContents(content, fileName, contentType) {
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
