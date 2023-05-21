import {
  Component,
  Input,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    OnDestroy
{

  quantidade: number = 0

  constructor() {}
  
  incrementar() {
    this.quantidade += 1;
  }
  decrementar() {
    this.quantidade -= 1;
  }

  ngOnChanges(): void { // quando valor liga a @Input() é alterado
    console.log('ngOnChanges');
  }
  ngOnInit(): void { // quando o componente é iniciado (primeiro se não houver mudanças em nenhum @Input())
    console.log('ngOnInit');
  }
  ngDoCheck(): void { // quando mudanças ocorrem na class
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void { // depois do ngDoCheck
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void { // quando o componente termina de carregar sua visualização após mudança na classe
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void { 
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void { // quando ngIf da tag desse componente troca para false
    console.log("morreu");
  }
}
