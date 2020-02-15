import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { searchService } from 'src/app/services/searchService.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-most-polluted',
  templateUrl: './most-polluted.component.html',
  styleUrls: ['./most-polluted.component.scss']
})
export class MostPollutedComponent implements OnInit {

  constructor(private service: searchService) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  data$;

  displayedColumns = ['cityId', "stateId", "aqius"];

  ngOnInit() {
    this.data$ = this.service.get5MostPolluted().subscribe(list => {
      let array = list.map(item => {
        console.log(item);
        return item;
      });
      console.log(array);
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


  }

}
