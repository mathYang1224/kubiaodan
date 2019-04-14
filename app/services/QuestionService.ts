import { Injectable } from '@angular/core';
import { Question } from "../interfaces/Question";
import { QuestionType } from "../interfaces/QuestionTypes";
@Injectable()
export class QuestionService {
	//题目列表
	private questions:Question[];
	//信号量，表示当前正在处于编译模式的题目
	private onedit : number;

	constructor(){
		//要用Ajax拉取信息
		this.questions = [
			{
				"title" : "你的游戏体验如何？",
				"type" : QuestionType.SingleOption,
				"options" : ["好" , "很好" , "很差"],
				"isrequired" : true
			},
			{
				"title" : "你的年龄",
				"type" : QuestionType.SingleOption,
				"options" : ["幼儿园" , "小学" , "初中" , "高中" , "大学"],
				"isrequired" : true
			},
			{
				"title" : "你觉得游戏最吸引你的是什么？",
				"type" : QuestionType.MultipleOption,
				"options" : ["画面精美" , "虐暴动画" , "身边有同学玩" , "可以找到女朋友"],
				"isrequired" : true
			}
		]

		//-1表示没有人处于编译状态
		this.onedit = -1;
	}

	//得到正在编辑的题目题号
	getEdit() : number{
		return this.onedit;
	}

	//设置正在编辑的题目题号
	setEdit(number : number) : void{
		this.onedit = number;
	}

	//得到所有题目
	getQuestions():Question[]{
		return this.questions;
	}

	//设置某题目的title
	setTitle(title:string):void{
		//设置题目
		this.questions[this.onedit].title = title;
	}

	//设置某题目的type
	setType(type : number):void{
		this.questions[this.onedit].type = QuestionType[QuestionType[type]];
	}

	//设置选项
	setOption(c : string , oidx:number) : void{
		this.questions[this.onedit].options[oidx] = c;
	}

	//删除项目
	delOption(oidx:number):void{
		this.questions[this.onedit].options.splice(oidx , 1);
	}

	//增加选项
	addOption(s:string):void{
		this.questions[this.onedit].options.push(s);
	}
}