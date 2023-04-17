import { Pipe, PipeTransform } from "@angular/core";
import { Team } from "../models/rest/api";

@Pipe({
    name: 'filterByDivision'
  })
  export class FilterByDivisionPipe implements PipeTransform {
  
    transform(teams: Team[], division: string): Team[] {
      return teams.filter(team => team.division === division);
    }
  
  }