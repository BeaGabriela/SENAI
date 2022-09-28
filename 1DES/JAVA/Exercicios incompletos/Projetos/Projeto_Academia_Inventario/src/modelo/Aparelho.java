package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;

import java.util.Date;

public class Aparelho {
	public String nome;
	public String tipoExercicio;
	public String grupoMuscular;
	public Date dataAquisicao;
	public double valorAquisicao;

	private SimpleDateFormat df = new SimpleDateFormat("dd/mm/yyyy");

	public Aparelho() {

	}

	public Aparelho(String nome, String tipoExercicio, String grupoMuscular, Date dataAquisicao, double valorAquisicao)
			throws ParseException {
		super();
		this.nome = nome;
		this.tipoExercicio = tipoExercicio;
		this.grupoMuscular = grupoMuscular;
		this.dataAquisicao = dataAquisicao;
		this.valorAquisicao = valorAquisicao;
	}

	public long tempoUso() {
		LocalDate dt = LocalDate.now();
		long Tempo = ChronoUnit.DAYS.between(dt, (Temporal) dataAquisicao);
		return Tempo;
	}

	public double depreciacao() {
		int taxa;
		taxa = 300 / 500;
		return 0.6;
	}

	public double valorDepreciado() {
		double taxa = depreciacao();
		double depreciacao;
		depreciacao = valorAquisicao * taxa ;
		double valorDepreciado = valorAquisicao - depreciacao;
		return valorDepreciado;
	}

	public String toString() {
		return nome + "\t " + tipoExercicio + "\t " + grupoMuscular + "\t " + df.format(dataAquisicao);
	}

	public String paraString() {
		return String.format("%.2f", valorAquisicao);
	
	}

}
