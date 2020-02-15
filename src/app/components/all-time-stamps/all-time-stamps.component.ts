import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { searchService } from 'src/app/services/searchService.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Pollution } from 'src/app/models/pollution.model';

@Component({
  selector: 'app-all-time-stamps',
  templateUrl: './all-time-stamps.component.html',
  styleUrls: ['./all-time-stamps.component.scss']
})
export class AllTimeStampsComponent implements OnInit {


  constructor(private service: searchService) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  data$;

  @Input() timestamps: Pollution[];

  displayedColumns = ['cityId', "aqius", "delete_timestamp"];

  ngOnInit() {

    console.log(this.timestamps);
    this.dataSource = new MatTableDataSource(this.timestamps);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteTimestamp(id: string) {
    if (confirm('Sure You Want to Delete this TIMESTAMP from Our Database?')) {
      console.log(id);
      this.service.deleteTimestamp(id);
      let index = this.timestamps.findIndex(obj => obj.id === id);
      this.dataSource.data.splice(index, 1);
      this.dataSource.paginator = this.paginator;

      console.log(this.timestamps);
      // window.location.reload();
    }
  }


}


