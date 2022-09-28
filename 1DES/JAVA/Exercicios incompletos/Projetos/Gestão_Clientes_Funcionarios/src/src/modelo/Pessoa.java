package src.modelo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Pessoa {
	private String nome;
	private String telefone;
	private Date nascimento;
	
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	
	public Pessoa(String nome, String telefone, Date nascimento) {
		this.nome = nome;
		this.telefone = telefone;
		this.nascimento = nascimento;
	}

	@Override
	public String toString() {
		return nome + "\t" + telefone + "\t" + df.format(nascimento);
	}
	
	
	
}

