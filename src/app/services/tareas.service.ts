import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}
  private localStorageKey = 'listaTareas';

  getTareas(): string[] {
    return JSON.parse(
      (localStorage.getItem(this.localStorageKey) as string) || '[]'
    );
  }

  agregarTarea(tarea: string) {
    const tareas: string[] = this.getTareas();
    console.log(tareas as string[]);
    console.log(this.getTareas());

    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
