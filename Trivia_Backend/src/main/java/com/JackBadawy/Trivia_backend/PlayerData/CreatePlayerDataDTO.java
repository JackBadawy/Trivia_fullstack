package com.JackBadawy.Trivia_backend.PlayerData;


import jakarta.validation.constraints.NotBlank;

public class CreatePlayerDataDTO {
	
	@NotBlank
	private String playerName;
	
	@NotBlank
	private String timePerQuestion;
	
	@NotBlank
	private String totalTime;
	
	@NotBlank
	private String wrongAnswers;

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getTimePerQuestion() {
		return timePerQuestion;
	}

	public void setTimePerQuestion(String timePerQuestion) {
		this.timePerQuestion = timePerQuestion;
	}

	public String getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(String totalTime) {
		this.totalTime = totalTime;
	}

	public String getWrongAnswers() {
		return wrongAnswers;
	}

	public void setWrongAnswers(String wrongAnswers) {
		this.wrongAnswers = wrongAnswers;
	}
}
