import { Component , OnInit , Input} from '@angular/core';
import { Question } from "../../interfaces/Question";
import { QuestionService } from "../../services/QuestionService";
@Component({
	selector: 'ppanel',		 
	templateUrl: './app/components/ppanel/ppanel.component.html' ,
	styleUrls : ['./app/components/ppanel/ppanel.style.css'] 
})
export class PPanel implements OnInit{
	@Input() qs : QuestionService;
	title : string;
	txt : string;

	constructor(){
	 	 
	}

	ngOnInit(){
	 
	}

	//返回题目类型
	getType():number{
		return this.qs.getQuestions()[this.qs.getEdit()].type;
	}
	//更改题目标题
	changeTitle(event : any){
		this.qs.setTitle(event.target.value)
	}

	//更改类型
	changeType(event:any):void{
		this.qs.setType(event.target.value);
	}

	//增加选项
	add():void{
		 
		this.qs.addOption(this.txt);
		this.txt = "";
	}
}