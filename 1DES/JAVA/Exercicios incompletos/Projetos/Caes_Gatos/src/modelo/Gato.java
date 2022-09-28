package modelo;

public class Gato extends Animal {
	private int qtdVidas = 7;

	public Gato(String especie, String nome, float peso, String raca, int qtdVidas) {
		super(especie, nome, peso, raca); 
		this.qtdVidas = qtdVidas;
	}

	@Override
	public String toString() {
		return qtdVidas + super.toString();
	}
	

}
