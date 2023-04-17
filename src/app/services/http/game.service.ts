import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Game, GamesApiResponse } from "src/app/models/rest/api";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private apiUrl = 'https://free-nba.p.rapidapi.com';

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'X-RapidAPI-Key': 'd8af23df99msh8da27fb170b14a3p1dc8b3jsn61a986035940',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        });
    }

    getAllGames(): Observable<Game[]> {
        const options = {
          headers: this.getHeaders()
        };
        return this.http.get<GamesApiResponse>(`${this.apiUrl}/games?page=0&per_page=25`, options)
          .pipe(
            map(response => response.data)
          );
      }

      getGameById(id: number): Observable<Game> {
        const options = {
          headers: this.getHeaders()
        };
        return this.http.get<Game>(`${this.apiUrl}/games/${id}`, options);
      }
}