package modelo;



import java.text.SimpleDateFormat;
import java.util.Date;

import modelo.aluno;

public class aluno {
	

	public static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public int RA;
	public String nome;
	public Date nascimento;
	public Nota[] notas = new Nota[4];
	public aluno[] alunos = new aluno [10];

	// construtor vazio
	public aluno() {
	}

	public aluno(int RA, String nome, Date nascimento) {
		this.RA = RA;
		this.nome = nome;
		this.nascimento = nascimento;
	}

	public String obterConceito() {
		String conceito = "";
		for (int j = 0; j < alunos.length; j++) {
		if(alunos[j] != null) {
		if (notas[j].obterMedia() >= 50) {
			conceito = "Aprovado!";
		} else {
			conceito = "Reprovado!";
		}
	}
		}
		return conceito;
	
	}

	// calcular idade
	public int calcularIdade() {
		Date now = new Date();
		int idade = 0;

		if (now.getMonth() == nascimento.getMonth()) {
			if (now.getDay() >= nascimento.getDay()) {
				return now.getYear() - nascimento.getYear();
			} else {
				idade = now.getYear() - nascimento.getYear() - 1;
				return idade;
			}

		} else if (now.getMonth() > nascimento.getMonth()) {
			idade = now.getYear() - nascimento.getYear();
			return idade;

		} else {
			idade = now.getYear() - nascimento.getYear() - 1;
			return idade;
		}

	}

	public String paraString() {

		return RA + "\t" + nome + "\t" + df.format(nascimento) + "\t"  +  calcularIdade();
	}
	
	
		
		
	}
	
	






