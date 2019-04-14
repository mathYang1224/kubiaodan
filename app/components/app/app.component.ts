import { Component } from '@angular/core';
import { QuestionService } from "../../services/QuestionService.ts";
 
@Component({
	selector: 'app',		 
	templateUrl: './app/components/app/app.component.html' ,
	styleUrls : ['./app/components/app/app.style.css'] , 
	providers : [QuestionService]
})
export class App {
	constructor(private qs : QuestionService) { 

	}
}