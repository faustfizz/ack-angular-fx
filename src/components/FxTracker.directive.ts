import {
  EventEmitter, Output, Input, Directive
} from "@angular/core"

import { ActivatedRoute } from "@angular/router"

@Directive({
  selector:"fx-tracker",
  exportAs:"FxTracker"
}) export class FxTracker{
  @Input() value:any//do not mix with ActivatedRoute
  @Input() activatedRoute:ActivatedRoute
  
  //TODO:need a number based way to track order
  @Input() orderArray:any[]//back and foward determined by matching items in array

  @Input() history:any[]
  @Output() historyChange:EventEmitter<any[]> = new EventEmitter()

  //current position in history table
  @Input() index:number//need not be an input
  @Output() indexChange:EventEmitter<number> = new EventEmitter()

  //animations forward versus back indicator
  @Input() id:0|false|1|true

  loaded:boolean
  inFx:boolean

  ngAfterViewInit(){
    //a much needed pause to properly routerOutlet.activated
    Promise.resolve().then(()=>
      this.loaded=true
    )
  }

  ngOnChanges(changes){
    if( changes.activatedRoute && changes.activatedRoute.currentValue ){
      this.produceByRoute( this.activatedRoute )
    }else if( changes.value ){
      this.produceFxId( this.value )
    }
  }

  produceByRoute( activatedRoute:any ){
    const path = this.getRoutePath(activatedRoute)
    this.produceFxId( path )
    this.value = path
  }

  produceFxId( value:any ):0|false|1|true{
    this.history = this.history || [];
    if (this.orderArray) {
        this.id = this.produceOrderFxId(value);
    }
    else {
        this.index = this.index == null ? 0 : this.index;
        const histLen = this.history.length;
        const isBack = histLen && this.history[this.index + 1] == value;
        const isForward = histLen && this.history[this.index - 1] == value;
        if (isBack) {
            this.indexChange.emit(++this.index);
            this.id = this.id === 0 ? false : 0;
            return this.id;
        }
        this.id = this.id === 1 ? true : 1;
        if (isForward) {
            this.indexChange.emit(--this.index);
            return this.id;
        }
        //this.index = this.history.length;
    }
    this.history.splice(this.index,0,value);
    this.indexChange.emit(this.index);
    this.history.splice(25, this.history.length);
    this.historyChange.emit(this.history);

    return this.id;
  }

  produceOrderFxId( value:any ):0|false|1|true{
    let oldIndex:number = 0
    let newIndex:number = 0
    const oldValue = this.history[this.history.length-1]

    this.orderArray.forEach((item,index)=>{
      if(value===item){
        newIndex = index
      }

      if(oldValue===item){
        oldIndex = index
      }
    })

    this.index = newIndex

    if( newIndex > oldIndex ){
      return this.id = this.id === 0 ? false : 0
    }

    return this.id = this.id === 1 ? true : 1
  }

  getRoutePath( activatedRoute ):string{
    let target = activatedRoute
    while(target.firstChild)target=target.firstChild
    return target.routeConfig.path
  }

  delayOutFx(){
    Promise.resolve().then(()=>this.inFx=false)
  }
}