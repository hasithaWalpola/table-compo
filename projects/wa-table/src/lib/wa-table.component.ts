import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-wa-table',
  template: './wa-table.component.html',
  styles:  ['./wa-table.component.scss']
})
export class WaTableComponent implements OnInit {

  @Input() isDataLoaded: boolean;
  @Input() tableData: any;
  @Input() tableKeys: any;
  @Input() colTypes: any;
  @Input() tableConfig: any; 
  @Input() tableAction: any; 
  @Input() tablePOSAction: any; 
  @Input() currentPage: any; 
  @Input() pages: any  ; 
  @Input() visiblePages: any  ; 
  @Input() filterForm: any  ; 
  @Input() loggedUserRole: any  ; 
  @Input() filterAvailability: boolean  ; 
  @Input() sortName_asc: boolean  ; 
  @Input() sortName_dsc: boolean  ; 
  @Input() categoryActive: number  ; 
  @Input() categories: any; 
  @Input() tableInfo: any; 
  @Input() isFilterClicked: any; 
  @Input() orderActionFilterSelected: any; 
  @Input() oderActionsSelector: any; 
  @Input() master_outlet_id: any; 
  @Input() filterClickHeight: any; 
  @Input() filterNotClickHeight: any; 
  @Input() isAllSelected: any; 
  @Input() selectedMenuItems: any; 
  @Input() noItemsAvailable: any; 
  @Input() filterSearchAvailability: any; 
  @Input() policies: any; 
  @Input() posSyncPolicy: any; 
  @Input() access: any; 
  @Input() toggleAccess : any; 
  
  @Output() onEditClick = new EventEmitter<any>();
  @Output() onDeleteClick = new EventEmitter<any>();
  @Output() onViewClick = new EventEmitter<any>();
  @Output() onMappingClick = new EventEmitter<any>();
  @Output() getMoreItems = new EventEmitter<any>();
  @Output() refreshFilters = new EventEmitter<any>();
  @Output() showFilter = new EventEmitter<any>();
  @Output() categoryPressed = new EventEmitter<any>();
  @Output() onStateChange = new EventEmitter<any>();
  @Output() searchItems = new EventEmitter<any>();
  @Output() itemSort = new EventEmitter<any>();
  @Output() posActionsClick = new EventEmitter<any>();
  @Output() onChangeAccepting = new EventEmitter<{int:any, e:any}>();
  @Output() onChangeAutoAccepting = new EventEmitter<{int:any, e:any}>();
  @Output() open = new EventEmitter<{text:any ,id:any}>();
  @Output() checkboxSelector = new EventEmitter<any>();
  @Output() selectItem = new EventEmitter<{item: any, event: any}>();
  // @Output() onChangeAutoAccepting: EventEmitter<{int:any, e:any}> = new EventEmitter();
  
  constructor() {

   }

  ngOnInit(): void {
   
  }

  setDisplayId(id: any) {
    let s = id + "";
    while (s.length < 5) s = "0" + s;
    return s;

  }


  setData(data: any) {
    console.log(data, 'data')
    //return s;

  }

  onClickAction(type: any, data){
    switch (type) {
      case "View":
        this.onViewClick.emit(data)
        break; 
      case "Edit":
        this.onEditClick.emit(data)
        break;
      case "Delete":
        this.onDeleteClick.emit(data)
        break; 
      case "Map":
        this.onMappingClick.emit(data)
        break;
    
      default:
        break;
    }
  }

  onPosActionsClick(data){
    this.posActionsClick.emit(data)
  }

  getPages(pageNumber: any){
    console.log(pageNumber)
    this.getMoreItems.emit(pageNumber)
  }

  onRefreshFilters(){
    this.refreshFilters.emit()
  }

  onShowFilter(){
    this.showFilter.emit()
    if(!this.isFilterClicked ){
      this.isFilterClicked = true;
    }else{
      this.isFilterClicked = false;
    }
  }

  onCategoryPressed(id: number){
    this.categoryPressed.emit(id)

    if(id === 0){
      this.onStateChange.emit("All")
    }else if(id === 1){
      this.onStateChange.emit("Match Found")
    }else{
      this.onStateChange.emit("Not Found")
    }
  }

  onSearchItems(event){
    this.searchItems.emit(event)
  }

  onItemSort(){
    this.itemSort.emit()
  }

  onChangeAccept(key: any, data:any, accept:any){
    if(key === "isAccepting"){
      this.onChangeAccepting.emit({int:data, e:accept})
    }
    else if(key === "isAutoAccepting"){
      this.onChangeAutoAccepting.emit({int:data, e:accept})
    }
  }
  
  onOpen(text:any, id:any){
    this.open.emit({text, id})
  }

  getRefreshFilters() {

    if(!this.isFilterClicked ){
      this.isFilterClicked = true;
    }else{
      this.isFilterClicked = false;
    }
  }

  selectAll(){
    this.checkboxSelector.emit()
  }

  onSelectItem(item, event){
   
    this.selectItem.emit({item, event})
  }

}
