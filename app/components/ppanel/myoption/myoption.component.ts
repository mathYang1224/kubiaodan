import { Component , OnInit , Input} from '@angular/core';
import { QuestionService } from "../../../services/QuestionService";
@Component({
	selector: 'my-option',		 
	templateUrl: './app/components/ppanel/myoption/myoption.component.html' ,
	styleUrls : ['./app/components/ppanel/myoption/myoption.style.css'],

})
export class MyOption implements OnInit{
	@Input() option : string;
	@Input() oidx : number;
	@Input() qs : QuestionService;
 
	isedit : boolean = false;

	constructor(){
	 	 
	}

	ngOnInit(){
	 
	}

	edit():void{
 		this.isedit = true;
	}

	changeoption(event : any ){
		this.isedit = false;
		this.qs.setOption(event.target.value , this.oidx);
	}
	
	del():void{
		this.qs.delOption(this.oidx);
	}
}