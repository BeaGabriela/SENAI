package modelo;
public class Pet {
//Atributos b�sicos
	public int idPet;
	public String tipoPet;
	public String nomePet;
	public String nomeDono;
	public float peso;

	//M�todos
	//Construtor vazio
	public Pet() {
	}

	//Construtor completo
	public Pet(int idPet, String tipoPet, String nomePet, String nomeDono, float peso) {
		this.idPet = idPet;
		this.tipoPet = tipoPet;
		this.nomePet = nomePet;
		this.nomeDono = nomeDono;
		this.peso = peso;
	}
	
	//toString (Concatena todos os atributos em uma s� String)
	public String paraString() {
		return idPet + "\t" + tipoPet + "\t" + nomePet + "\t" + nomeDono + "\t" + String.format("%.1f", peso);
	}

}
