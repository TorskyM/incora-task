import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  public isModalOpened = false;
  public modalTypeAdd = true;

  public open(): void {
    this.isModalOpened = true;
  }

  public close(): void {
    this.isModalOpened = false;
  }
}
