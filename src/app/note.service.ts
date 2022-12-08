import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const NOTES_ENDPOINT = "http://localhost:3000/notes";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getNote(filmId: number): Observable<any> {
    const userId = this.authService.connectedUser?.data?.userId;

    return this.http.get(`${NOTES_ENDPOINT}?userId=${userId}&filmId=${filmId}`);
  }

  updateNote(noteId: string, rating: number) {
    return this.http.put(`${NOTES_ENDPOINT}/${noteId}`, {
      rating,
    });
  }
}
