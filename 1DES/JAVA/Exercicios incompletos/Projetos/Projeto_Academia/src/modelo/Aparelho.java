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

	public Aparelho(String nome, String tipoExercicio, String grupoMuscular, String dataAquisicao, double valorAquisicao)
			throws ParseException {
		super();
		this.nome = nome;
		this.tipoExercicio = tipoExercicio;
		this.grupoMuscular = grupoMuscular;
		this.dataAquisicao = df.parse(dataAquisicao);
		this.valorAquisicao = valorAquisicao;
	}

	public int tempoUso() {
		Date hoje = new Date();
		return hoje.getYear() - dataAquisicao.getYear();
	}

	public double depreciacao() {
		return  valorAquisicao/ 10 *tempoUso();
	}

	public double valorDepreciado() {
		return valorAquisicao - depreciacao();
	}

	public String toString() {
		return nome + "\t " + tipoExercicio + "\t " + grupoMuscular + "\t " + df.format(dataAquisicao) + "\t" + valorAquisicao;
	}

	
	}

