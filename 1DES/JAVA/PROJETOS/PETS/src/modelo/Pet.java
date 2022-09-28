package modelo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

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

	public int getId() {
		return id;
	}
	
	public String getId(String s) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public float getPeso() {
		return peso;
	}
	public String getPeso(String s) {
		return String.format("%.2f", peso);
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public String getNascimento(String s) {
		return sdf.format(nascimento);
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getDono() {
		return dono;
	}

	public void setDono(String dono) {
		this.dono = dono;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Pet(int id) {
		this.id = id;
	}
	
	

	public Pet(String linha) {
		this.id = Integer.parseInt(linha.split(";"))[0];
		this.especie = linha.split(";")[1];
		this.nome = linha.split(";")[2];
		this.raca = linha.split(";")[3];
		this.peso = Float.parseFloat(linha.split(";"))[4];
		try {
			this.nascimento = sdf.parse(linha.split(";")[5]);
		}catch (ParseException e){
			System.out.println(e);
		}
		this.dono = linha.split(";")[6];
		this.telefone = linha.split(";")[7];
		
	}

	public int obterIdade() {
		return new Date().getYear() - nascimento.getYear();
	}
	
	public String tocsv() {
		return id + ";" + especie + ";" + nome + ";" + raca + " ; " + String.format("%.2f", peso) + ";"
				+ sdf.format(nascimento) + ";" + obterIdade() + ";" + dono + ";" + telefone + "\r\n";
	
	}

	

	@Override
	public String toString() {
		return id + "  " + especie + "\t" + nome + "\t" + raca + "  " + String.format("%.2f", peso) + "  \t"
				+ sdf.format(nascimento) + "   " + obterIdade() + "\t" + dono + "" + telefone + "\n";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Pet other = (Pet) obj;
		return id == other.id;
	}

}
