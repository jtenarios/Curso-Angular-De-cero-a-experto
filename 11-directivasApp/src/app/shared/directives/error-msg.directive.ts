import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido'

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }


  // @Input() mensaje: string = 'Este campo es necesario';
  @Input() set mensaje(valor: string) {
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Constructor directive');
    console.log(el);

    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    console.log(changes);
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
