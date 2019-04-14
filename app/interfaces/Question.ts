import { QuestionType } from "./QuestionTypes.ts";
export interface Question {
	title 		: string,
	isrequired 	: boolean,
	options? 	: string[],
	type 		: QuestionType
}