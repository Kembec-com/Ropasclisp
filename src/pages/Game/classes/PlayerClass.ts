import { Choice } from "../constants/ChoiceEnum";
import type PlayerInterface from "../interfaces/PlayerInterface";

export class Player implements PlayerInterface {
	public name: string;
	public choice: Choice;

	constructor(name?: string, choice?: Choice) {
		let setName = name;
		let setChoice = choice;

		if (!setName) {
			setName = "BOT";
		}
		if (!setChoice || setName === "BOT") {
			setChoice = this.getRandomChoice();
		}
		this.name = setName;
		this.choice = setChoice;
	}

	public getRandomChoice(): Choice {
		const choices: Choice[] = Object.keys(Choice).map((key) => Choice[key as keyof typeof Choice]);

		return choices[Math.floor(Math.random() * choices.length)];
	}
}
