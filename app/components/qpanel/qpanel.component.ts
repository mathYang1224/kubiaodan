import { Component , Input , OnInit} from '@angular/core';
import { Question } from "../../interfaces/Question.ts";
import { QuestionService } from "../../services/QuestionService.ts";
 
@Component({
	selector: 'qpanel',		 
	templateUrl: './app/components/qpanel/qpanel.component.html' ,
	styleUrls : ['./app/components/qpanel/qpanel.style.css']
})
export class QPanel implements OnInit{
	questions : Question[];
	title : string;
	@Input() qs : QuestionService;

	//构造器，构造器运行的很早，甚至于属性还没有传入进来
	constructor(){
		this.title = "王者荣耀游戏反馈调查";
	}

	//当初始化的时候，使用这个生命周期钩子，本组件类必须实现OnInit接口
  	ngOnInit(){
  		this.questions = this.qs.getQuestions();
  	}

  	//编辑
  	edit(number : number):void{
  		this.qs.setEdit(number);
  	}

	//设置类名
	setClass(index:number):string{
		return this.qs.getEdit() == index ? "cur" : "";
	}
}