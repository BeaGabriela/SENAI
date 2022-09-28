package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Pet {

	private int id;
	private String especie;
	private String nome;
	private String raca;
	private float peso;
	private Date nascimento;
	private String dono;
	private String telefone;

	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	public Pet(int id, String especie, String nome, String raca, float peso, String nascimento, String dono,
			String telefone) throws ParseException {
		this.id = id;
		this.especie = especie;
		this.nome = nome;
		this.raca = raca;
		this.peso = peso;
		this.nascimento = sdf.parse(nascimento);
		this.dono = dono;
		this.telefone = telefone;
	}
	public int obterIdade() {
		return new Date().getYear() - nascimento.getYear();
	}

	@Override
	public String toString() {
		return  id + "  " + especie + "\t" + nome + "\t" + raca + "  " + String.format("%.2f", peso)
				+ "\t" + sdf.format(nascimento) + "   "+ obterIdade() + "\t" + dono + "" + telefone + "\n";
	}

}
