import { Choice } from "../constants/ChoiceEnum";
import type GameInterface from "../interfaces/GameInterface";
import { Player } from "./PlayerClass";

export class Game implements GameInterface {
	public player1: Player;
	public player2: Player;

	constructor(player1Name: string, player1Choice: Choice, player2Name?: string, player2Choice?: Choice) {
		this.player1 = new Player(player1Name, player1Choice);
		this.player2 = new Player(player2Name, player2Choice);
	}

	public play(): string {
		if (this.player1.choice === this.player2.choice) {
			return "Draw";
		}
		if (
			(this.player1.choice === Choice.Rock && this.player2.choice === Choice.Scissors) ||
			(this.player1.choice === Choice.Rock && this.player2.choice === Choice.Lizard) ||
			(this.player1.choice === Choice.Paper && this.player2.choice === Choice.Rock) ||
			(this.player1.choice === Choice.Paper && this.player2.choice === Choice.Spock) ||
			(this.player1.choice === Choice.Scissors && this.player2.choice === Choice.Paper) ||
			(this.player1.choice === Choice.Scissors && this.player2.choice === Choice.Lizard) ||
			(this.player1.choice === Choice.Spock && this.player2.choice === Choice.Rock) ||
			(this.player1.choice === Choice.Spock && this.player2.choice === Choice.Scissors) ||
			(this.player1.choice === Choice.Lizard && this.player2.choice === Choice.Paper) ||
			(this.player1.choice === Choice.Lizard && this.player2.choice === Choice.Spock)
		) {
			return this.player1.name;
		}

		return this.player2.name;
	}
}
